import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import _ from '@lodash';
import Statuses from './Statuses';
import { getSafeString } from '@/utils/string-utils.js';

const StyledBadge = styled(Badge)(({ theme, ...props }) => ({
	width: 40,
	height: 40,
	fontSize: 20,
	'& .MuiAvatar-root': {
		fontSize: 'inherit',
		color: theme.palette.text.secondary,
		fontWeight: 600
	},
	'& .MuiBadge-badge': {
		backgroundColor: props.statuscolor,
		boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
		'&::after': {
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			borderRadius: '50%',
			content: '""'
		}
	}
}));

/**
 * The user avatar component.
 */
function UserAvatar(props) {
	const { user, className } = props;
	const status = _.find(Statuses, { value: user?.status });
	return (
		<StyledBadge
			className={className}
			overlap="circular"
			anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
			variant="dot"
			statuscolor={status?.color}
		>
			<Avatar
				src={user?.avatar}
				alt={`${getSafeString(user?.firstName)} ${getSafeString(user?.lastName)}`}
				className="w-full h-full"
			>
				{user?.firstName && (!user?.avatar || user?.avatar === '') ? user?.firstName[0] : ''}
			</Avatar>
		</StyledBadge>
	);
}

export default UserAvatar;
