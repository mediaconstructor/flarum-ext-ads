import app from 'flarum/forum/app';

import { extend } from 'flarum/common/extend';

import IndexPage from 'flarum/forum/components/IndexPage';

import type * as Mithril from 'mithril';
import RefreshAds from './RefreshAds';
import type ItemList from 'flarum/common/utils/ItemList';
import DiscussionPage from 'flarum/forum/components/DiscussionPage';
import safelyEvalAdScript from './safelyEvalAdScript';
import areAdsBypassed from './areAdsBypassed';
import areAdsShown from './areAdsShown';

export default function InsertDiscussionSidebarAd() {
  const root = document.querySelector(':root') as HTMLHtmlElement;

  const AdCode = app.data['mediaconstructor-ads.ad-code.discussion_sidebar'] as string;
  const Script = app.data['mediaconstructor-ads.ad-code.discussion_sidebar.js'] as string;

  const Html = m.trust(AdCode) as ReturnType<Mithril.Static['trust']>;

  root.style.setProperty('--mediaconstructor-ads--discussion-sidebar-position', '36px');

  extend(DiscussionPage.prototype, 'sidebarItems', function (this: IndexPage, items: ItemList<Mithril.Children>) {
    if (areAdsBypassed() && !areAdsShown()) return;

    // Only show sidebar ad on desktop and tablet
    if (['desktop-hd', 'desktop', 'tablet'].includes(getComputedStyle(root).getPropertyValue('--flarum-screen'))) {
      items.add('mediaconstructor-ads', <div class="mediaconstructor-ad mediaconstructor-ad-discussion-sidebar">{Html}</div>, 1000);
    }
  });

  extend(DiscussionPage.prototype, ['oncreate', 'onupdate'], function (this: IndexPage, returned: any) {
    if (areAdsBypassed() && !areAdsShown()) return;

    RefreshAds();
    safelyEvalAdScript('discussion sidebar', Script);
  });
}
