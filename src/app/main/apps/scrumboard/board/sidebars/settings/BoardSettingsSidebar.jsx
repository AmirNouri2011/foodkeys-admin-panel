import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemText from '@mui/material/ListItemText';
import Switch from '@mui/material/Switch';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import { Controller, useForm } from 'react-hook-form';
import { useEffect } from 'react';
import _ from '@lodash';
import { useDebounce, useDeepCompareEffect } from '@fuse/hooks';
import { lighten } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ListItemButton from '@mui/material/ListItemButton';
import { useNavigate, useParams } from 'react-router-dom';
import {
	useDeleteScrumboardBoardMutation,
	useGetScrumboardBoardQuery,
	useUpdateScrumboardBoardMutation
} from '../../../ScrumboardApi';

/**
 * The board settings sidebar component.
 */
function BoardSettingsSidebar(props) {
	const { onSetSidebarOpen } = props;
	const navigate = useNavigate();
	const routeParams = useParams();
	const { boardId } = routeParams;
	const { data: board } = useGetScrumboardBoardQuery(boardId);
	const [updateBoard] = useUpdateScrumboardBoardMutation();
	const [deleteBoard] = useDeleteScrumboardBoardMutation();
	const { watch, control, reset } = useForm({
		mode: 'onChange',
		defaultValues: board?.settings
	});
	const boardSettingsForm = watch();
	const updateBoardData = useDebounce((data) => {
		updateBoard({ id: boardId, ...data });
	}, 600);
	useDeepCompareEffect(() => {
		if (_.isEmpty(boardSettingsForm) || !board?.settings) {
			return;
		}

		if (!_.isEqual(board.settings, boardSettingsForm)) {
			updateBoardData({ settings: boardSettingsForm });
		}
	}, [board, boardSettingsForm, updateBoardData]);
	useEffect(() => {
		if (!board) {
			return;
		}

		reset(board.settings);
	}, [board, reset]);

	if (_.isEmpty(boardSettingsForm)) {
		return null;
	}

	return (
		<div>
			<Box
				sx={{
					backgroundColor: (theme) =>
						theme.palette.mode === 'light'
							? lighten(theme.palette.background.default, 0.4)
							: lighten(theme.palette.background.default, 0.02)
				}}
				className="border-b-1"
			>
				<Toolbar className="flex items-center px-4">
					<IconButton
						onClick={() => onSetSidebarOpen(false)}
						color="inherit"
						size="large"
					>
						<FuseSvgIcon>heroicons-outline:x</FuseSvgIcon>
					</IconButton>
					<Typography
						className="px-4 font-medium text-16"
						color="inherit"
						variant="subtitle1"
					>
						تنظیمات
					</Typography>
				</Toolbar>
			</Box>

			<List className="py-24">
				<ListItem>
					<ListItemIcon className="min-w-40">
						<FuseSvgIcon>heroicons-outline:photograph</FuseSvgIcon>
					</ListItemIcon>
					<ListItemText primary="تصاویر جلد کارت" />
					<ListItemSecondaryAction>
						<Controller
							name="cardCoverImages"
							control={control}
							render={({ field: { onChange, value } }) => (
								<Switch
									onChange={(ev) => {
										onChange(ev.target.checked);
									}}
									checked={value}
								/>
							)}
						/>
					</ListItemSecondaryAction>
				</ListItem>

				<ListItem>
					<ListItemIcon className="min-w-40">
						<FuseSvgIcon>heroicons-outline:eye-off</FuseSvgIcon>
					</ListItemIcon>
					<ListItemText primary="اشتراک " />
					<ListItemSecondaryAction>
						<Controller
							name="subscribed"
							control={control}
							render={({ field: { onChange, value } }) => (
								<Switch
									onChange={(ev) => {
										onChange(ev.target.checked);
									}}
									checked={value}
								/>
							)}
						/>
					</ListItemSecondaryAction>
				</ListItem>

				<ListItemButton
					onClick={() => {
						deleteBoard(boardId)
							.unwrap()
							.then(() => {
								navigate(`/apps/scrumboard/boards`);
							});
					}}
				>
					<ListItemIcon className="min-w-40">
						<FuseSvgIcon>heroicons-outline:trash</FuseSvgIcon>
					</ListItemIcon>
					<ListItemText primary="حذف برد" />
				</ListItemButton>
			</List>
		</div>
	);
}

export default BoardSettingsSidebar;
