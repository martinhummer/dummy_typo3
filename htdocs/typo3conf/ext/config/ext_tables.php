<?php
if (!defined('TYPO3_MODE')) {
    die ('Access denied.');
}

	/***************
	 * Default TypoScript
	 */
	\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($_EXTKEY, 'Configuration/TypoScript', 'Config');

	// New icons for the BE
	if (TYPO3_MODE === 'BE') {

	    $icons = array('category', 'comment', 'storage', 'news', 'people');
	    foreach ($icons as $icon) {

	        \TYPO3\CMS\Backend\Sprite\SpriteManager::addTcaTypeIcon(
	            'pages',
	            'contains-' . $icon,
	            \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::extRelPath('config') . 'Resources/Public/Backend/Icons/' . $icon . '.png');

	        $GLOBALS['TCA']['pages']['columns']['module']['config']['items'][] = array(
	            ucfirst($icon),
	            $icon,
	            \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::extRelPath('config') . 'Resources/Public/Backend/Icons/' . $icon . '.png'
	        );
	    }
	}