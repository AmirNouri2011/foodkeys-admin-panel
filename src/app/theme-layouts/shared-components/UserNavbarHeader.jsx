import { darken, styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { selectUser } from 'src/app/auth/user/store/userSlice';
import { useAppSelector } from 'app/store/hooks';
import { API_STATIC_FILES_BASE_URL } from 'app/store/apiService.js';
import { getSafeString } from '@/utils/string-utils.js';

const Root = styled('div')(({ theme }) => ({
	'& .username, & .email': {
		transition: theme.transitions.create('opacity', {
			duration: theme.transitions.duration.shortest,
			easing: theme.transitions.easing.easeInOut
		})
	},
	'& .avatar': {
		background: darken(theme.palette.background.default, 0.05),
		transition: theme.transitions.create('all', {
			duration: theme.transitions.duration.shortest,
			easing: theme.transitions.easing.easeInOut
		}),
		bottom: 0,
		'& > img': {
			borderRadius: '50%'
		}
	}
}));

/**
 * The user navbar header.
 */
function UserNavbarHeader() {
	const user = useAppSelector(selectUser);
	return (
		<Root className="user relative flex flex-col items-center justify-center p-16 pb-14 shadow-0">
			<div className="mb-24 flex items-center justify-center">
				<Avatar
					sx={{
						backgroundColor: 'background.paper',
						color: 'text.secondary'
					}}
					className="avatar uppercase h-96 w-96 text-32 font-bold"
					src={getSafeString(user?.avatar?.filePath)}
					alt={user?.firstName}
				>
					{user?.firstName?.charAt(0)}
				</Avatar>
			</div>
			<Typography className="username whitespace-nowrap text-14 font-medium">
				{`${getSafeString(user?.firstName)} ${getSafeString(user?.lastName)}`}
			</Typography>
			<Typography
				className="email whitespace-nowrap text-13 font-medium"
				color="text.secondary"
			>
				{user?.email || user?.username}
			</Typography>
		</Root>
	);
}

export default UserNavbarHeader;
