import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { Controller, useForm } from 'react-hook-form';
import IconButton from '@mui/material/IconButton';
import { useEffect } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import CountryCodeSelector from './CountryCodeSelector';
// Zod schema for ContactPhoneNumber
const schema = z.object({
	country: z.string().optional(),
	phoneNumber: z.string().optional(),
	label: z.string().optional()
});
const defaultValues = {
	country: '',
	phoneNumber: '',
	label: ''
};

/**
 * The phone number input.
 */
function CustomArrayFieldInput(props) {
	const { value, hideRemove = false, onChange, onRemove } = props;
	const { control, formState, handleSubmit, reset } = useForm({
		mode: 'all',
		defaultValues,
		resolver: zodResolver(schema)
	});
	const { errors } = formState;
	useEffect(() => {
		reset(value);
	}, [reset, value]);

	function onSubmit(data) {
		onChange(data);
	}

	return (
		<form
			className="flex space-x-16 mb-16"
			onChange={handleSubmit(onSubmit)}
		>
			<Controller
				control={control}
				name="label"
				render={({ field }) => (
					<TextField
						{...field}
						label="Label"
						placeholder="Label"
						variant="outlined"
						fullWidth
						className="me-10"
						error={!!errors.label}
						helperText={errors?.label?.message}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<FuseSvgIcon size={20}>heroicons-solid:tag</FuseSvgIcon>
								</InputAdornment>
							)
						}}
					/>
				)}
			/>
			<Controller
				control={control}
				name="phoneNumber"
				render={({ field }) => (
					<TextField
						{...field}
						label="شماره تلفن"
						placeholder="شماره تلفن"
						variant="outlined"
						fullWidth
						error={!!errors.phoneNumber}
						helperText={errors?.phoneNumber?.message}
						InputProps={{
							startAdornment: (
								<Controller
									control={control}
									name="country"
									render={({ field: _field }) => (
										<InputAdornment position="start">
											<CountryCodeSelector {..._field} />
										</InputAdornment>
									)}
								/>
							)
						}}
					/>
				)}
			/>

			{!hideRemove && (
				<IconButton
					onClick={(ev) => {
						ev.stopPropagation();
						onRemove(value);
					}}
				>
					<FuseSvgIcon size={20}>heroicons-solid:trash</FuseSvgIcon>
				</IconButton>
			)}
		</form>
	);
}

export default CustomArrayFieldInput;
