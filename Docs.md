
# Descirption

This will contain short informal internal description of the whole project and the list of components we add and there use so a contributor caan understand what is the use of that particular component.

# Components

## ThemedText
    This is to be used insted of <Text> component as it is dynamic with the theme of the user. I will add comments in the 
    component file to explain how it works.

## TextInputField
    This is to be used as a text input in the app insted of the original text input component, it will have a label on top of it, it is yet to be implemented properly.

## IconButton
    This component is of no use as of now and will be removed from the component directory

## HomeScreenButtons
    It contains all the home screen buttons and it is not of use for any other pages, it will be modified to make it of universal use.
## Header
    A header component will be implemented here that will be present througout the app

## CamScanner
    The camera and qr scanning logic is implemented here and will be used in the scan tab.

## BlueBox
    It is used in the mess tab for showing price of coupons remaining.

## ThemedView
    This is to be used insted of the origin <View> compnent, I will add comments in the component file to explain how it works.

# Constant

## Colors
    This file contains an object colors which has colors of different elements like text, background and icons predefined for 
    both light and dark theme, should not be directly used instead use the useThemedColor custom hook.

# Custom Hooks

## useThemedColors
    This hook is used to dynamically select colors based on the user default theme, how to use it will be explained in the file 
    itself.