import app from 'flarum/forum/app';
import areAdsBypassed from './areAdsBypassed';
import areAdsShown from './areAdsShown';
import RefreshAds from './RefreshAds';
import safelyEvalAdScript from './safelyEvalAdScript';

export default function InsertFooterAd() {
  setTimeout(() => {
    if (areAdsBypassed() && !areAdsShown()) return;

    const AdCode = app.data['mediaconstructor-ads.ad-code.footer'] as string;
    const Script = app.data['mediaconstructor-ads.ad-code.footer.js'] as string;

    const footer = document.createElement('footer');
    footer.className = 'mediaconstructor-ad mediaconstructor-ad-footer';
    footer.setAttribute('align', 'center');

    document.querySelector('.App-content')!.append(footer);

    footer.innerHTML = AdCode;

    // Hacky way to detect URL change and re-create ad tag

    const pushState = history.pushState;
    history.pushState = function (...args) {
      pushState.apply(history, args);

      footer.innerHTML = AdCode;

      RefreshAds();
      safelyEvalAdScript('footer', Script);
    };

    RefreshAds();
  }, 0);
}
