<?php

/*
 * This file is part of davwheat/ads.
 *
 * Copyright (c) 2021 David Wheatley.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

use Flarum\Database\Migration;

return Migration::addSettings([
    'mediaconstructor-ads.enabled-ad-locations' => '[]',
    'mediaconstructor-ads.ad-code.header' => '',
    'mediaconstructor-ads.ad-code.discussion_sidebar' => '',
    'mediaconstructor-ads.ad-code.between_posts' => '',
    'mediaconstructor-ads.ad-code.footer' => '',
]);
