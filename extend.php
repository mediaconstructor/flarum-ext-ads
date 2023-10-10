<?php

/*
 * This file is part of davwheat/ads.
 *
 * Copyright (c) 2021 David Wheatley.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Davwheat\Ads;

use Flarum\Extend;
use Davwheat\Ads\Extend\ExtensionSettings;
use Flarum\Api\Serializer\ForumSerializer;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js')
        ->css(__DIR__ . '/less/forum.less')
        ->content(ForumDocumentContent::class),

    (new Extend\Frontend('admin'))
        ->js(__DIR__ . '/js/dist/admin.js')
        ->css(__DIR__ . '/less/admin.less'),

    new Extend\Locales(__DIR__ . '/locale'),

    (new Extend\ApiSerializer(ForumSerializer::class))
        ->attributes(ForumAttributes::class),

    (new ExtensionSettings())
        ->addKey('mediaconstructor-ads.ad-code.between_posts', '')
        ->addKey('mediaconstructor-ads.ad-code.discussion_header', '')
        ->addKey('mediaconstructor-ads.ad-code.discussion_sidebar', '')
        ->addKey('mediaconstructor-ads.ad-code.footer', '')
        ->addKey('mediaconstructor-ads.ad-code.header', '')
        ->addKey('mediaconstructor-ads.ad-code.sidebar', '')

        ->addKey('mediaconstructor-ads.ad-code.between_posts.js', '')
        ->addKey('mediaconstructor-ads.ad-code.discussion_header.js', '')
        ->addKey('mediaconstructor-ads.ad-code.discussion_sidebar.js', '')
        ->addKey('mediaconstructor-ads.ad-code.footer.js', '')
        ->addKey('mediaconstructor-ads.ad-code.header.js', '')
        ->addKey('mediaconstructor-ads.ad-code.sidebar.js', '')

        ->addKey('mediaconstructor-ads.between-n-posts', 15)
        ->addKey('mediaconstructor-ads.enable-ad-after-placeholder', 0)
        ->addKey('mediaconstructor-ads.enabled-ad-locations', '[]'),
];
