import React from 'react';
import { Text as NativeText, StyleSheet } from 'react-native';

const FONT_WEIGHT_MAPPING = {
	normal: 'Regular',
	bold: 'Bold',
	unset: 'Regular',
	100: 'Thin',
	200: 'Ultralight',
	300: 'Light',
	400: 'Regular',
	500: 'Medium',
	600: 'SemiBold',
	700: 'Bold',
	800: 'Heavy',
	900: 'Black',
};

const CURRENT_FONT_FAMILY_LIST = [
	'Poppins-Bold',
	'Poppins-BoldItalic',
	'Poppins-ExtraBold',
	'Poppins-ExtraLight',
	'Poppins-Italic',
	'Poppins-Light',
	'Poppins-Medium',
	'Poppins-Regular',
	'Poppins-SemiBold',
	'Poppins-Thin',
];
const DEFAULT_FONT_FAMILY = 'Poppins-Regular';

//! to do handle font style

const getFontFamily = (fontWeight) => {
	const fontFamily = `Poppins-${FONT_WEIGHT_MAPPING[fontWeight] || 'Regular'}`;

	return CURRENT_FONT_FAMILY_LIST.includes(fontFamily)
		? fontFamily
		: DEFAULT_FONT_FAMILY;
};

function flattenStyles(...styles) {
	return StyleSheet.flatten(styles);
}

function Text(props) {
	const { style = {}, children, ...rest } = props;

	const flattenedStyles = flattenStyles(style);

	const { fontWeight = '400', ...restStyles } = flattenedStyles || {};

	const fontFamily = getFontFamily(fontWeight) || DEFAULT_FONT_FAMILY;

	return (
		<NativeText
			style={[{ fontFamily, color: '#000' }, { ...restStyles }]}
			{...rest}
		>
			{children}
		</NativeText>
	);
}
export default Text;

export const possibleFontWeights = [
	/* Keyword values */
	' normal',
	' bold',
	/* Keyword values relative to the parent */
	' lighter',
	' bolder',
	/* Numeric keyword values */
	' 100',
	' 200',
	' 300',
	' 400', // normal
	' 500',
	' 600',
	' 700', // bold
	' 800',
	' 900',
	/* Global values */
	' inherit',
	' initial',
	' revert',
	' revert-layer',
	' unset',
];
