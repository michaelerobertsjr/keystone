/* eslint-disable key-spacing */
const theme = {};
const { blend, fade, lighten } = require('./utils/color');

// ==============================
// COMMON
// ==============================

// breakpoint

theme.breakpointNumeric = {
	mobile:           480,
	tabletPortrait:   768,
	tabletLandscape:  1024,
	desktop:          1280,
};
theme.breakpoint = {
	tabletPortraitMin:  (theme.breakpointNumeric.mobile + 1) + 'px',
	tabletLandscapeMin: (theme.breakpointNumeric.tabletPortrait + 1) + 'px',
	desktopMin:         (theme.breakpointNumeric.tabletLandscape + 1) + 'px',
	desktopLargeMin:    (theme.breakpointNumeric.desktop + 1) + 'px',

	mobileMax:           theme.breakpointNumeric.mobile + 'px',
	tabletPortraitMax:   theme.breakpointNumeric.tabletPortrait + 'px',
	tabletLandscapeMax:  theme.breakpointNumeric.tabletLandscape + 'px',
	desktopMax:          theme.breakpointNumeric.desktop + 'px',
};

// color

theme.color = {
	body:                '#FDFDFD',
	link:                '#1385e5',
	linkHover:           lighten('#1385e5', 10),
	text:                '#1A1A1A',

	// contextual
	success:             '#00b368',
	create:              '#00b368', // alias for success
	primary:             '#1385e5',
	info:                '#1385e5', // alias for primary
	warning:             '#FA3',
	danger:              '#bf0020',
	error:               '#bf0020', // alias for danger

	// neutrals
	gray90:              '#1A1A1A',
	gray80:              '#333',
	gray70:              '#4D4D4D',
	gray60:              '#666',
	gray50:              '#7F7F7F',
	gray40:              '#999',
	gray30:              '#B3B3B3',
	gray20:              '#CCC',
	gray15:              '#D9D9D9',
	gray10:              '#E5E5E5',
	gray05:              '#F2F2F2',

	// social
	facebook:            '#3B5998',
	google:              '#DC4E41',
	instagram:           '#3f729b',
	pinterest:           '#bd081c',
	tumblr:              '#35465c',
	twitter:             '#55ACEE',
	youtube:             '#cd201f',
	vimeo:               '#1ab7ea',
};

// border radii

theme.borderRadius = {
	small: '0.125rem',
	default: '0.3rem',
	large: '0.5rem',
};

// spacing

theme.spacing = {
	xsmall:      5,
	small:       10,
	default:     20,
	large:       30,
	xlarge:      40,
	xxlarge:     60,
};

// ==============================
// ELEMENTAL SPECIFIC
// ==============================

// button

theme.button = {
	font: {
		weight: 500,
	},
	paddingHorizontal: '1em',
	default: {
		bgColor: theme.color.primary,
		borderColor: blend(theme.color.primary, theme.color.body, 60),
		textColor: theme.color.primary,
	},
	primary: {
		bgColor: theme.color.primary,
		borderColor: blend(theme.color.primary, theme.color.body, 60),
		textColor: theme.color.primary,
	},
	success: {
		bgColor: theme.color.success,
		borderColor: blend(theme.color.success, theme.color.body, 60),
		textColor: theme.color.success,
	},
	warning: {
		bgColor: theme.color.warning,
		borderColor: blend(theme.color.warning, theme.color.body, 60),
		textColor: theme.color.warning,
	},
	danger: {
		bgColor: theme.color.danger,
		borderColor: blend(theme.color.danger, theme.color.body, 60),
		textColor: theme.color.danger,
	},
};

// font

theme.font = {
	family: {
		mono: 'Menlo, Monaco, Consolas, "Courier New", monospace',
		sansSerif: '"Helvetica Neue", Helvetica, Arial, sans-serif',
		serif: 'Georgia, Times New Roman, Times, serif',
	},
	size: {
		xxsmall: '0.65rem',
		xsmall: '0.75rem',
		small: '0.85rem',
		default: '1rem',
		medium: '1.2rem',
		large: '1.6rem',
		xlarge: '2.4rem',
		xxlarge: '3.2rem',
	},
};

// form

theme.form = {
	label: {
		color: theme.color.gray50,
		fontSize: '1rem',
		fontWeight: 'normal',
		width: 180,
	},
	note: {
		color: theme.color.gray40,
		fontSize: '0.9em',
	},
};

// component

theme.component = {
	lineHeight: '2.3em',
	height: '2.4em',
	padding: '1em',
};

// input

theme.input = {
	bgColor: 'white',
	bgDisabled: '#fafafa',
	placeholderColor: '#aaa',
	lineHeight: theme.component.lineHeight,
	height: theme.component.height,
	border: {
		color: '#ccc',
		colorHover: '#bbb',
		colorFocus: theme.color.info,
	},
	boxShadow: 'inset 0 1px 1px rgba(0, 0, 0, 0.075)',
	boxShadowFocus: `inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 3px ${fade(theme.color.info, 10)}`,
	paddingHorizontal: '.75em',
};

module.exports = theme;
