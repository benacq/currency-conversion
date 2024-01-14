import { ComponentType, FocusEventHandler, Key, ReactNode } from "react";
import { ActionMeta, ClearIndicatorProps, ContainerProps, ControlProps, CSSObjectWithLabel, GetOptionLabel, GetOptionValue, GroupBase, IndicatorsContainerProps, IndicatorSeparatorProps, InputProps, MenuListProps, MenuProps, OptionProps, OptionsOrGroups, PlaceholderProps, SingleValueProps, StylesConfig, ValueContainerProps } from "react-select";

export enum DropdownType {
    Async,
    Sync,
}

export type OptionType = {
    value: string;
    label: string;
};

export interface AsyncProps {
    key?: Key;
    defaultOptions?: boolean | OptionsOrGroups<unknown, GroupBase<unknown>> | undefined
    cacheOptions?: boolean | undefined,
    getOptionLabel?: GetOptionLabel<unknown> | undefined,
    getOptionValue?: GetOptionValue<unknown> | undefined,
    loadOptions: ((inputValue: string, callback: (options: OptionsOrGroups<unknown, GroupBase<unknown>>) => void) => void) | ((inputValue: string) => Promise<OptionsOrGroups<unknown, GroupBase<unknown>>>) | undefined,
    noOptionsMessage?: (obj: { inputValue: string }) => ReactNode
}

export interface RegularStyles {
    indicatorIconColor?: string;
    height?: string | number | undefined
    width?: string | number | undefined //150,
    fontSize?: string | number | undefined //11.5
    valueContainerMarginTop?: string | number | undefined
    textColor?: string
    iconContainerPadding?: string | number | undefined
    placeholder?: string | undefined // 'Select...',
    containerBorder?: string | number | undefined  //"1.5px solid rgb(233, 235, 243)",
}


export interface IconProps {
    Icon?: ComponentType;
    size?: string;
    color?: string;
    left?: string;
    right?: string;
    top: string;
    bottom: string;
}


export interface StyleProps {
    clearIndicator: StylesConfig<ClearIndicatorProps<unknown, false, GroupBase<unknown>>>;
    dropdownIndicator: StylesConfig<ClearIndicatorProps<unknown, false, GroupBase<unknown>>>;
    control: StylesConfig<ControlProps<unknown, false, GroupBase<unknown>>>;
    input: StylesConfig<InputProps<unknown, false, GroupBase<unknown>>>;
    container: StylesConfig<ContainerProps<unknown, false, GroupBase<unknown>>>;
    singleValue: StylesConfig<SingleValueProps<unknown, false, GroupBase<unknown>>>;

    // base: StylesConfig<SingleValueProps<unknown, false, GroupBase<unknown>>>;
    option: StylesConfig<OptionProps<unknown, false, GroupBase<unknown>>> | ((provided: CSSObjectWithLabel, _: OptionProps<unknown, false, GroupBase<unknown>>) => {});

    valueContainer: StylesConfig<ValueContainerProps<unknown, false, GroupBase<unknown>>>;
    indicatorsContainer: StylesConfig<IndicatorsContainerProps<unknown, false, GroupBase<unknown>>>;
    placeholder: StylesConfig<PlaceholderProps<unknown, false, GroupBase<unknown>>> | undefined
    menu: StylesConfig<MenuProps<unknown, false, GroupBase<unknown>>>;
    menuList: StylesConfig<MenuListProps<unknown, false, GroupBase<unknown>>>;
    indicatorSeparator: StylesConfig<IndicatorSeparatorProps<unknown, false, GroupBase<unknown>>>;
}

export interface BaseDropdownProps {
    instanceId: string;
    disabled?: boolean;
    className?: string;
    value?: OptionType;
    placeholder?: string;
    name?: string;
    options?: OptionsOrGroups<unknown, GroupBase<unknown>> | undefined
    selectType: DropdownType;
    onChange?: (newValue: unknown, actionMeta: ActionMeta<unknown>) => void;
    onBlur?: FocusEventHandler<HTMLInputElement> | undefined;
    noOptionsMessage?: ((obj: { inputValue: string; }) => ReactNode) | undefined;
    defaultInputValue?: string;
    defaultMenuIsOpen?: boolean;
    defaultValue?: string;
    isClearable?: boolean | undefined;
    isSearchable?: boolean | undefined;
    customSingleValue?: ComponentType<SingleValueProps<unknown, false, GroupBase<unknown>>> | undefined;
    customSelectOption?: ComponentType<OptionProps<unknown, false, GroupBase<unknown>>> | undefined
    regularStyles?: RegularStyles
    asyncProps?: AsyncProps;
    styleProps?: StyleProps;
    iconProps?: IconProps
}