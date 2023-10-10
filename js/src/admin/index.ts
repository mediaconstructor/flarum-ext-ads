import app from 'flarum/admin/app';

import SettingsPage from './components/SettingsPage';

import type { CustomExtensionPage } from 'flarum/admin/utils/ExtensionData';

app.initializers.add('mediaconstructor/ads', () => {
  app.extensionData
    .for('mediaconstructor-ads')
    .registerPage(SettingsPage as unknown as CustomExtensionPage)
    .registerPermission(
      {
        icon: 'fas fa-shield-alt',
        permission: 'mediaconstructor-ads.bypass-ads',
        label: app.translator.trans('mediaconstructor.ads.admin.permissions.bypassAds'),
        allowGuest: true,
      },
      'view'
    )
    .registerPermission(
      {
        icon: 'fas fa-ad',
        permission: 'mediaconstructor-ads.view-ads',
        label: app.translator.trans('mediaconstructor.ads.admin.permissions.viewAds'),
        allowGuest: true,
      },
      'view'
    );
});
