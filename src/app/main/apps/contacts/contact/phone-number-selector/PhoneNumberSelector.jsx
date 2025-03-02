import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import Button from "@mui/material/Button";
import { forwardRef } from "react";
import clsx from "clsx";
import FormHelperText from "@mui/material/FormHelperText";
import PhoneNumberInput from "./PhoneNumberInput";
import { ContactPhoneModel } from "../../models/ContactModel";
/**
 * The phone number selector.
 */
const PhoneNumberSelector = forwardRef((props, ref) => {
	const { value, onChange, className, error, helperText } = props;
	return (
		<div className={clsx("w-full", className)} ref={ref}>
			{error && helperText && (
				<FormHelperText error={error}>{helperText}</FormHelperText>
			)}

			{value.map((item, index) => (
				<PhoneNumberInput
					value={item}
					key={index}
					onChange={(val) => {
						onChange(
							value.map((_item, _index) => (index === _index ? val : _item))
						);
					}}
					onRemove={() => {
						onChange(value.filter((_item, _index) => index !== _index));
					}}
					hideRemove={value.length === 1}
				/>
			))}
			<Button
				className="group inline-flex items-center mt-2 -ml-4 py-2 px-4 rounded cursor-pointer"
				onClick={() => onChange([...value, ContactPhoneModel({})])}
			>
				<FuseSvgIcon size={20}>heroicons-solid:plus-circle</FuseSvgIcon>

				<span className="mr-8 font-medium text-secondary group-hover:underline">
					افزودن شماره تلفن
				</span>
			</Button>
		</div>
	);
});
export default PhoneNumberSelector;
