import app from 'flarum/forum/app';

import { extend, override } from 'flarum/common/extend';

import IndexPage from 'flarum/forum/components/IndexPage';

import type * as Mithril from 'mithril';
import RefreshAds from './RefreshAds';
import safelyEvalAdScript from './safelyEvalAdScript';
import areAdsBypassed from './areAdsBypassed';
import areAdsShown from './areAdsShown';

export default function InsertHeaderAd() {
  const AdCode = app.data['mediaconstructor-ads.ad-code.header'] as string;
  const Script = app.data['mediaconstructor-ads.ad-code.header.js'] as string;

  const Html = m.trust(AdCode) as ReturnType<Mithril.Static['trust']>;

  override(IndexPage.prototype, 'hero', function (originalHero: () => Mithril.Children): Mithril.Children {
    if (areAdsBypassed() && !areAdsShown()) console.log(app.forum.attribute);
    if (areAdsBypassed() && !areAdsShown()) return originalHero();

    return (
      <>
        {originalHero()}
        <div align="center" class="mediaconstructor-ad mediaconstructor-ad-header">
          {Html}
        </div>
      </>
    );
  });

  extend(IndexPage.prototype, ['oncreate', 'onupdate'], function (this: IndexPage, returned: any) {
    if (areAdsBypassed() && !areAdsShown()) return;

    RefreshAds();
    safelyEvalAdScript('header', Script);
  });
}
