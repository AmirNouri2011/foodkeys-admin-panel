import FuseScrollbars from '@fuse/core/FuseScrollbars';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Typography from '@mui/material/Typography';
import { useSnackbar } from 'notistack';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { useLocation } from 'react-router-dom';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import FuseLoading from '@fuse/core/FuseLoading';
import _ from '@lodash';
import NotificationCard from './NotificationCard';
import {
	closeNotificationPanel,
	selectNotificationPanelState,
	toggleNotificationPanel
} from './notificationPanelSlice';
import {
	useGetAdminNotificationsQuery
} from './NotificationApi';
import NotificationModel from './models/NotificationModel';
import NotificationTemplate from './NotificationTemplate';
import { addNotification } from '@/app/main/apps/notifications/models/notificationSlice.js';

const StyledSwipeableDrawer = styled(SwipeableDrawer)(({ theme }) => ({
	'& .MuiDrawer-paper': {
		backgroundColor: theme.palette.background.default,
		width: 320
	}
}));

/**
 * The notification panel.
 */
function NotificationPanel() {
	const location = useLocation();
	const dispatch = useAppDispatch();
	const state = useAppSelector(selectNotificationPanelState);
	// const [deleteNotification] = useDeleteNotificationMutation();
	// const [deleteAllNotifications] = useDeleteAllNotificationsMutation();
	// const [addNotification] = useGetAdminNotificationsQuery();
	const { data: notifications, isLoading } = useGetAdminNotificationsQuery();
	const { enqueueSnackbar, closeSnackbar } = useSnackbar();
	useEffect(() => {
		if (state) {
			dispatch(closeNotificationPanel());
		}
	}, [location, dispatch]);
	useEffect(() => {
		dispatch(addNotification(notifications))
		const item = NotificationModel({
			title: 'ثبت شرکت جدید',
			message: 'شرکت جدیدی با شناسه ۶۵۳۷ ثبت شده است',
			description: 'شرکت جدیدی با شناسه ۶۵۳۷ ثبت شده است',
			link: '/documentation/changelog',
			icon: 'heroicons-solid:fire',
			variant: 'secondary'
		});
		setTimeout(() => {
			// addNotification(item);
			enqueueSnackbar(item.title, {
				key: item.id,
				autoHideDuration: 6000,
				content: (
					<NotificationTemplate
						item={item}
						onClose={() => {
							closeSnackbar(item.id);
						}}
					/>
				)
			});
		}, 2000);
	}, []);

	function handleClose() {
		dispatch(closeNotificationPanel());
	}

	function handleDismiss(id) {
		// deleteNotification(id);
	}

	function handleDismissAll() {
		// deleteAllNotifications();
	}

	function demoNotification() {
		const item = NotificationModel({ title: 'پیام جدید از طرف مدیر' });
		// addNotification(item);
		enqueueSnackbar(item.title, {
			key: item.id,
			// autoHideDuration: 3000,
			content: (
				<NotificationTemplate
					item={item}
					onClose={() => {
						closeSnackbar(item.id);
					}}
				/>
			)
		});
	}

	if (isLoading) {
		return <FuseLoading />;
	}

	return (
		<StyledSwipeableDrawer
			open={state}
			anchor="right"
			onOpen={() => {}}
			onClose={() => dispatch(toggleNotificationPanel())}
			disableSwipeToOpen
		>
			<IconButton
				className="absolute right-0 top-0 z-999 m-4"
				onClick={handleClose}
				size="large"
			>
				<FuseSvgIcon color="action">heroicons-outline:x</FuseSvgIcon>
			</IconButton>

			<FuseScrollbars className="flex flex-col p-16 h-full">
				{notifications?.length > 0 ? (
					<div className="flex flex-auto flex-col">
						<div className="mb-36 flex items-end justify-between pt-136">
							<Typography className="text-28 font-semibold leading-none">پیام‌ها و اعلانات</Typography>
							<Typography
								className="cursor-pointer text-12 underline"
								color="secondary"
								onClick={handleDismissAll}
							>
								پاک کردن همه
							</Typography>
						</div>
						{_.orderBy(notifications, ['time'], ['desc']).map((item) => (
							<NotificationCard
								key={item.id}
								className="mb-16"
								item={item}
								onClose={handleDismiss}
							/>
						))}
					</div>
				) : (
					<div className="flex flex-1 items-center justify-center p-16">
						<Typography
							className="text-center text-24"
							color="text.secondary"
						>
							هیچ پیام جدیدی ندارید
						</Typography>
					</div>
				)}
				<div className="flex items-center justify-center py-16">
					<Button
						size="small"
						variant="outlined"
						onClick={demoNotification}
					>
						ایجاد پیام دمو
					</Button>
				</div>
			</FuseScrollbars>
		</StyledSwipeableDrawer>
	);
}

export default NotificationPanel;
