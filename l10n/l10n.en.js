﻿var Dictionaries = {};
Dictionaries['en'] = {
    "header": {
        "page-title": "Story Master Toolkit NIMS",
        "overview":"Overview",
        "characters":"Characters",
        "stories":"Stories",
        "adaptations":"Adaptations",
        "briefings":"Handouts",
        "timeline":"Timeline",
        "social-network":"Social Network",
        "character-filter":"Character Filter",
        "open-database":"Load database from file",
        "save-database":"Save database to file",
        "create-database":"Create new database",
        "docs":"Documentation",
        "admins":"Administrative tools",
        "chat":"Chat",
        "logout":"Exit",
        "test":"Test",
        "about":"About",
        "logViewer":"Logs",
        "l10n":"English",
        "dictionary-icon":"gb",
        "briefing-preview" : "Preview",
        "briefing-export" : "Export",
        "character-profile" : "Profile",
        "character-profile-constructor" : "Profile constructor",
        "master-story" : "Master story",
        "story-events" : "Events",
        "story-characters" : "Characters",
        "event-presence" : "Presence",
        "groups" : "Groups",
        "group-profile" : "Group profiles",
        "group-schema" : "Hierarchy",
        "investigation-board" : "Story map",
        "relations" : "Relation to other characters",
        "about" : "About",
    },
    "common": {
        "to":"to",
        "ok":"OK",
        "cancel":"Cancel",
        "add":"Add",
        "create": "Create",
        "rename": "Rename",
        "remove":"Remove",
        "replace": "Replace",
        "on": "on",
        "set-item-before" : "Before '{0}'",
        "set-item-as-last" : "To end",
    },
    "constant": {
        "yes":"Yes",
        "no": "No",
        // social network subsets
        "allObjects" : "All objects",
        "selectedCharacters": "Selected characters",
        "selectedStories": "Selected stories",
        // social network types
        //"simpleNetwork"            : "Simple Network",
        "socialRelations"          : "Social Realtions",
        "characterPresenceInStory" : "Character-Presence-Story",
        "characterActivityInStory" : "Character-Activity-Story",
        // no group
        "noGroup": "No group" ,
        // activities
        "active"    : "Active" ,
        "follower"  : "Follower" ,
        "defensive" : "Defensive" ,
        "passive"   : "Passive" ,
        // number filter
        "ignore" : "Ignore",
        "greater" : "Greater",
        "equal" : "Equal",
        "lesser" : "Lesser",
        // adaptations labels
        "finishedText" : "Text finished",
        "finishedSuffix" : "(finished)",
        "emptySuffix" : "(empty)",
        // profile item types
        "text":"Text",
        "string":"String",
        "enum":"Single Choice", // single choice
        "number":"Number",
        "checkbox":"Checkbox",
    },
    "overview": {
        "descr":"Description",
        "diagrams":"Diagrams",
        "name":"Name",
        "pre-game-start-date":"Pre game events start date",
        "pre-game-end-date":"Pre game events end date",
        "stats":"Statistics",
        "story-count":"Story count",
        "character-count":"Character count",
        "event-count":"Event count",
        "user-count":"User count",
        "first-event":"First event",
        "last-event":"Last event",
        "symbol-count":"Symbol count (excluding spaces)",
        "story-completeness":"Story completeness",
        "general-completeness":"General completeness",
        "event-count-diagram":"Event count in stories",
        "character-count-diagram":"Character count in stories",
        "story-completeness-diagram":"Detailed story completeness",
        "object-belonging-diagrams":"Object belonging",
        "story-completeness-value":'{0}% ({1} from {2} stories)',
        "general-completeness-value": '{0}% ({1} from {2} adaptations)',
        'consistency-problem-detected': "Detected base corruption during consistency check. Please contact developer to fix problems.",
        'last-save-time': 'Last save time',
        'character-stories-diagram': 'Story count per character',
        'character-symbols-diagram': 'Symbol count per character',
    },
    "characters": {
        "character-managing":"Character managing",
        "character-name":"Character name",
        "new-character-name":"New character name",
        "profile":"Profile",
        "profile-editor":"Profile editor",
        "characters":"Characters",
        "profile-item-name":"Enter item name",
        "profile-item-type":"Type",
        "profile-item-position":"Position",

        "move-item":"Move",
        "table-profile-item-name":"Profile item name",
        "profile-item-default-value":"Value(s)",
        "profile-item-do-export":"Do export",
        
        // character management errors
        "character-name-is-not-specified" : "Character name is empty",
        "new-character-name-is-not-specified" : "New name is empty.",
        "names-are-the-same" : "Names are the same.",
        "character-name-already-used" : "Name {0} already used.",
        "are-you-sure-about-character-removing" : "Are you sure you want to remove {0}? All related data for this character will be removed irretrivable.",

        // profile configurer errors
        "unknown-profile-item-type" : "Unknown item type: {0}",
        "profile-item-positions-are-equal": "Item positions are equal",
        "are-you-sure-about-removing-profile-item": "Are you sure about removing profile item {0}? All related data for this profile item will be removed irretrivable.",
        "not-a-number":"Not a number",
        "enum-item-cant-be-empty":"Single choice value can't be empty",
        "new-enum-values-remove-some-old-values": "New single choice values remove some old values: {0}. This action will update current profiles. Are you sure?",
        "profile-item-name-is-not-specified": "Profile item name is not specified",
        "profile-item-name-cant-be-name": "Profile item name can't be 'name'",
        "such-name-already-used": "Such name already used",
        "are-you-sure-about-changing-profile-item-type":"Are you sure about changing profile item type {0}? All profile values for this field will be lost.",
    },
    "character-filter": {
        "show-profile-item":"Show profile item",
        "filter":"Filter",
        "results":"Results:",
        "character":"Character",
        "completeness": "Adaptation completness, %",
        "totalStories": "Story number",
        "character-owner" : "Owner",
        "download-filter-table" : "Download table"
    },
    "stories":{
        "stories":"Stories",
        "story-management":"Stories management",
        "story-name":"Story name",
        "new-story-name":"New story name",
        "event-creation": "Event creation",
        "event-name": "Enter event name",
        "event-descr": "Enter event description",
        "event-position": "Position",
        "event-management": "Events manangement",
        "move-event": "Move event",
        "clone-event": "Clone event",
        "merge-events": "Merge event with next",
        "story-character-management": "Characters management",
        "inventory": "Inventory",
        "name": "Name",
        "activity": "Activity",
        "show-characters": "Show characters",
        "event":"Event",
        "remove-character-from-event-warning": "Are you sure about removing character {0} from event '{1}'? This character has event adaption which will be removed irretrivable.",
        //story management errors
        "story-name-is-not-specified" : "Story name is not specified.",
        "new-story-name-is-not-specified" : "New name is not specified.",
        "names-are-the-same" : "Names are the same.",
        "story-name-already-used" : "Name {0} already used.",
        "are-you-sure-about-story-removing" : "Are you sure about removing story {0}? All data related to story will be removed irretrivable.",
        // story characters errors
        "character-name-is-not-specified":"Character name is not specified",
        "one-of-switch-characters-is-not-specified":"Name of switch character is not specified",
        "remove-character-from-story-warning":"Are you sure about removing character {0} from story? All data related to character will be removed irretrivable.",
        // story event management
        "event-name-is-not-specified" : "Event name is not specified",
        "event-text-is-empty" : "Event text is empty",
        "event-positions-are-the-same" : "Event positions are the same",
        "cant-merge-last-event" : "Selected event merged with next. There are no merge events after last event.",
        "remove-event-warning" : "Are you sure about removing event {0}? All data related to event will be removed irretrivable.",
    },
    "adaptations":{
        "show-only-unfinished-stories": "Show only unfinished stories",
        "story": "Story",
        "filter": "Filter",
        "by-characters": "By characters",
        "by-events": "By events",
        "characters": "Characters",
        "events": "Events",
        "adaptations": "Adaptations",
        "origin": "Origin",
        "adaptation": "Adaptation",
    },
    "admins":{
        "user-management": "Users management",
        "user-name": "User name",
        "user-password": "Password",
        "new-password": "New password",
        "change-password": "Change password",
        "special-actions": "Special actions",
        "admin": "Current administrator:",
        "assign-admin": "Assign administrator",
        "editor": "Current editor:",
        "remove-editor": "Remove editor",
        "assign-editor": "Assign editor",
        "assign-adaptation-rights": "Assign adaptation rights",
        "by-stories": "By stories",
        "by-characters": "By characters",
        "editing-rights": "Editing rights",
        "rights": "Rights",
        "characters": "Characters",
        "stories": "Stories",
        "groups": "Groups",
        "users": "Users",
        "assign-rights": "Assign rights",
        "take-away-rights": "Take away rights",
        'have-not-owner' : "Have not owner",
        'user-name-is-not-specified' : "User name is not specified",
        'password-is-not-specified' : "Password is not specifid",
        'user-already-exists' : "User already exists",
        'confirm-user-remove' : "Are you sure about removing user {0}? User objects will not be removed.",
        'user-is-not-selected' : "User is not selected",
        'confirm-admin-assigment' : "Are you sure about about assigning user {0} as admin? You can't undo this action.",
        'confirm-editor-assigment' : "Are you sure about about assigning user {0} as editor? While editor exists other users can't modify their objects.",
        'function-must-be-overriden-on-server': "Function {0} must be overriden by server.",
    },
    "briefings":{
        "settings": "Settings",
        "group-by-story": "Group events by story",
        "sort-by-timeline": "Sort events by timeline",
        "export-mode": "Export mode",
        "each-briefing-to-own-file": "Each handout to own file",
        "briefing-selection": "Select handout for export",
        "print-all": "Export all",
        "print-partly": "Partial export",
        "briefings-amount": "Handout amount",
        "briefings-range": "Handout range",
        "simple-export": "Simple export",
        "advanced-docx-export": "Advanced export docx",
        "advanced-txt-export": "Advanced text export",
        "make-docx-by-time": "Make handouts, sort events by timeline (docx)",
        "make-docx-by-stories": "Make handouts, group events by story (docx)",
        "make-txt": "Make text handouts",
        "make-inventory": "Make inventory list (docx)",
        "upload-template-and-make-export": "Upload template and make handouts",
        "template": "Template",
        "enter-text-file-type": "Print text data type (txt, html, rst, etc.)",
        "preview": "Preview",
        "raw-data": "Raw data",
        "export": "Export",
        "exported-text": "Exported text",
        "export-status": "Export status",
        "error-on-template-uploading": "Error on template uploading",
        "error-on-generating-briefings": "Error on making handouts",
        "convert-to-docx-template":"Convert to docx template",
        "generate-by-docx-template":"Generate to docx by current template",
        "exact-multiselect": "Exact multiselect",
        "export-settings": "Export settings",
        'adaptations-mode':'Adaptation mode',
        'proofreading-mode':'Proofreading mode',
        'template-error': 'Error in template: {0}',
        // briefings preview
        "inventory":'Inventory',
        "unlock-event-source":"Unlock origin editing",
        "hide-all-panels" : "Hide all panels",
        "disable-headers" : "Disable headers",
        'profile': 'Profile',
        'events-header':'Event {0}-{1}',
        'story-header':'Story {0}',
        'event-header':'Event {0}',
        'subjective-time':"Subjective time: ",
        'origin': 'Origin',
        'adaptation': 'Adaptation',
        'where-meets': 'Where meets',
        'profile-item': 'Profile item',
        'known-characters': 'Known by story characters',
        'unknown-characters': 'Unknown by story characters',
        
        // relation editor
        'character-name': 'Character name',
        'direct-relation': 'Relation',
        'reverse-relation': 'Reverse relation',
        'extra-info': 'Extra information',
        // export status
        "save-preparing" : "Preparing export.",
        "start-saving": "Data is ready. Export started.",
        "save-status": "Export {0} from {1}.",
        "archiving": "Handouts ready. Archiving.",
        "archive-is-ready": "Archive is ready.",
        "save-archive": "Archive is ready. Save?",
        "file-is-ready": "Document is ready.",
        "save-file": "Document is ready. Save?",
    },
    "timeline":{
        "stories": "Stories",
    },
    "social-network":{
        "show-node": "Focus node:",
        "common-settings": "Common settings",
        "color-nodes": "Node colors",
        "legend": "Legend",
        "selection": "Selection",
        "characters": "Characters",
        "stories": "Stories",
        "story":"Story",
        "private-settings": "Private settings",
        "social-network": "Social Network",
        "activity": "Activity",
        "draw": "Draw",
        "hide-panel": "Hide panel",
        "require-resources-warning":"Warning! Social network rendering requires many computer resources. It is recommended to save database before rendering.",
        "remove-resources-warning":"Remove warning",
    },
    "utils":{
        "close-page-warning": "Be sure you save your data. After page closing all unsaved data will be lost.",
        "new-base-warning": "Are you sure about creating new database? All unsaved changes in current database will be lost.",
        "base-file-loading-error": "Base file loading error."
    },
    "log-viewer" : {
        "page" : "Page",
        "date" : "Date",
        "user" : "User",
        "action" : "Action",
        "params" : "Parameters",
    },
    "groups" : {
        "groups" : "Groups",
        "filterModel" : "Filter",
        "characterList" : "Character list",
        "masterDescription" : "Master description",
        "doExport" : "Print in handouts",
        "characterDescription" : "Text for character",
        "group-name" : "Group name",
        "new-group-name" : "New group name",
        "show-groups" : "Show group",
        "show-group-filter" : "Show group filter",
        "save-group-filter" : "Save filter to group",
        "manage-groups" : "Management",
        "text-contains" : "contains '{0}'",
        "total" : 'Total: ',
        
        // group management errors
        "group-name-is-not-specified" : "Group name is not specified",
        "new-group-name-is-not-specified" : "New name is not specified.",
        "names-are-the-same" : "Names are the same.",
        "group-name-already-used" : "Name {0} already used.",
        "are-you-sure-about-group-removing" : "Are you sure about removing group {0}? All data related to group will be removed irretrivable.",
        "group-editing-forbidden" : "Not sufficient rights for editing {0}",
        "page-filter-is-incompatible-with-base-profiles" : "Character filter on page is not compatible with character profile in base by items: {0}. Reopen tab with character filter to load new settings.",
        "base-filter-is-incompatible-with-page-profiles" : "Character filter in base is not compatible with character profile on page by items: {0}. Reopen tab with character filter to load new settings."

    },
    "investigation-board" : {
        'confirm-group-node-removing' : 'Are you sure about removing group {0} from board? Notes and links will be removed irretrivable.',
        'confirm-resource-node-removing' : 'Are you sure about removing resource {0} from board? Links with other nodes will be removed irretrivable.',
        'enter-edge-label' :"Enter label",
        
        'add-group' : 'Add group',
        'create-resource' : 'Create resource',
        'replace-group' : 'Replace group',
        'group-notes' : 'Notes',
        'rename-resource' : 'Rename resource',
        'resource-name' : 'Resource name',
        'new-resource-name' : 'New resource name',
        
        // errors
        'group-name-is-not-specified': 'Group name can\'t be empty.',
        'group-already-used-on-board' : 'Group already used on board.',
        'group-is-not-used-on-board' : 'Group is not used on board.',
        
        "new-name-is-not-specified" : 'Name is not specified.',
        "name-already-used" : 'Name "{0}" already used.',
        "rename-name-is-not-specified" : 'New name is not specified.',
        "names-are-the-same" : 'Names are the same.',
        
        "resource-node-cant-be-first" : 'Resource can\'t be the first node for the edge.',
        "such-relation-already-exists" : 'Relation already exists.',
        "relation-is-not-exist" : 'Relation is not exist.',
    },
    'about' : {
        "about-authors" : "Program 'Story master toolkit NIMS' (SMTK NIMS) is written by Timofey Rechkalov (NtsDK) and Maria Sidekhmenova (Matilda).",
        "site-mention" : "Author\'s site: ",
        "site-description" : "You can find documentation, presentation, YouTube screencast playlist and social network links on author's site.",
        "program-is-free-in-rep" : "SMTK NIMS is a freeware. Source code is open under Apache 2 license",
        "by-link" : "by link",
        "icons-authors" : "Authors of used icons from www.flaticon.com: Anton Saputro, Pavel Kozlov, Budi Tanrim, Catalin Fertu, Picol and Freepik. Sort icon author FatCow.",
        "versions" : "Version story",
        "var044u3" : "Version 0.4.4u3 (21 Jul 2016) - new example base and new section in documentation about export.",
        "var044u2" : "Version 0.4.4u2 (14 Jun 2016) - added strict validation with JSON schema.",
        "var044" : "Version 0.4.4 (21 Apr 2016) - defensive improvements and tests.",
        "var043" : "Version 0.4.3 (29 Feb 2016) - added statistics and export improvements.",
        "var042" : "Version 0.4.2 (18 Jan 2016) - added server mode.",
        "var041" : "Version 0.4.1 (27 Nov 2015) - first public release.",
    }
};

