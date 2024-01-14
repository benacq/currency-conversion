import AsyncSelect from 'react-select/async';
import Select, { components } from 'react-select';
import { BaseDropdownProps, DropdownType } from './types';
import { PiCaretDown, PiCaretUp } from 'react-icons/pi';




const DropdownSelect = (props: BaseDropdownProps) => {


    const isAsync: boolean = props.selectType === DropdownType.Async

    const selectComponents = {
        [DropdownType.Async]: AsyncSelect,
        [DropdownType.Sync]: Select
    };
    const SelectComponent = selectComponents[props.selectType];


    const selectConditionalProps = isAsync ?
        { ...props.asyncProps }
        : {
            options: props.options
        };
//formatOptionLabel
    return (
        <SelectComponent
            isDisabled={props.disabled}
            isClearable={props.isClearable}
            defaultValue={props.defaultValue}
            placeholder={props.placeholder}
            name={props.name}
            onBlur={props.onBlur}
            instanceId={props.instanceId}
            isSearchable={props.isSearchable ?? false}
            value={props.value}
            onChange={isAsync ? (value, actionMeta) => props.onChange && props.onChange(value, actionMeta) : props.onChange}

            styles={{
                // menuList: styles => ({
                //     ...styles,
                //     background: 'red',
                // }),

                container: styles => ({
                    ...styles,
                    width: props.regularStyles?.width ?? '100%',
                }),

                input: styles => ({
                    ...styles,
                    display: 'flex',
                    height: 'inherit',
                    margin: '0',
                }),
                
                control: styles => ({
                    ...styles,
                    // border: 'none', // Border of the select
                    fontSize: 16,
                    border: props.regularStyles?.containerBorder ?? '1px solid #000',
                    borderRadius: '8px',
                    height: props.regularStyles?.height ?? '48px',
                    alignItems: 'center',
                    padding: "0 5px",
                    boxShadow: 'none',
                    '&:hover': {
                        border: '1px solid black',
                    }
                }),


                valueContainer: styles => ({
                    ...styles,
                    height: 'inherit',
                    padding: '0',
                    alignItems: 'center',
                    display: 'flex'
                }),

                placeholder: styles => ({
                    ...styles,
                    height: 'inherit ',
                    paddingLeft: '5px',
                    display: 'flex',
                    alignItems: 'center'
                }),

                indicatorsContainer: styles => ({
                    ...styles,
                    height: 'inherit',
                }),

                indicatorSeparator: styles => ({
                    ...styles,
                    display: 'none',
                }),
            }}

            components={{

                DropdownIndicator: (props) => (
                    components.DropdownIndicator && (
                        <components.DropdownIndicator {...props}>
                            <span className='relative text-gray1'>
                                {props.selectProps.menuIsOpen ? <PiCaretUp size={'15px'} /> : <PiCaretDown size={'15px'} />}
                            </span>
                        </components.DropdownIndicator>
                    )
                ),
            }}
            {...selectConditionalProps}
        />
    )
}

export default DropdownSelect