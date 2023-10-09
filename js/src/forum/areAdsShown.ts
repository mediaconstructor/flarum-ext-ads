import app from 'flarum/forum/app';

export default function areAdsShown() {
  return app.forum.attribute<boolean>('canViewAds');
}
