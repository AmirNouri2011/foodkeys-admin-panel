import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';

/**
 * The DemoHeader component.
 */
function DemoHeader(props) {
	const { leftSidebarToggle, rightSidebarToggle, title, breadcrumbs } = props;

	function handleClick() {}

	return (
		<div className="flex flex-col p-24 w-full sm:py-32 sm:px-40">
			<div>
				<Breadcrumbs
					dir="rtl"
					separator={<FuseSvgIcon size={20}>heroicons-solid:chevron-left</FuseSvgIcon>}
					aria-label="breadcrumb"
				>
					{(breadcrumbs &&
						breadcrumbs.map((item, index) => (
							<Link
								className={item.className || 'font-medium hover:underline'}
								key={index}
								color={item.color || 'inherit'}
								to={item.href}
								onClick={item.onClick || handleClick}
							>
								{item.label}
							</Link>
						))) || (
						<>
							<Link
								className="font-medium hover:underline"
								key="1"
								color="inherit"
								to="/"
								onClick={handleClick}
							>
								Projects
							</Link>
							<Link
								className="font-medium hover:underline"
								key="2"
								color="inherit"
								to="/getting-started/installation/"
								onClick={handleClick}
							>
								Weekend Project
							</Link>
							<Typography
								className="font-medium"
								key="3"
								color="text.primary"
							>
								Overview
							</Typography>
						</>
					)}
				</Breadcrumbs>

				<div className="flex sm:hidden" />
			</div>
			<div className="flex items-center w-full mt-8 -mx-10">
				{leftSidebarToggle && (
					<div className="flex shrink-0 items-center">
						<IconButton
							onClick={leftSidebarToggle}
							aria-label="toggle sidebar"
						>
							<FuseSvgIcon>heroicons-outline:menu</FuseSvgIcon>
						</IconButton>
					</div>
				)}
				<Typography
					component="h2"
					className="flex-1 text-3xl md:text-4xl font-extrabold tracking-tight leading-7 sm:leading-10 truncate mx-10"
				>
					{title || 'pageHeading'}
				</Typography>
				{rightSidebarToggle && (
					<div className="flex shrink-0 items-center">
						<IconButton
							onClick={rightSidebarToggle}
							aria-label="toggle sidebar"
						>
							<FuseSvgIcon>heroicons-outline:menu</FuseSvgIcon>
						</IconButton>
					</div>
				)}
			</div>
		</div>
	);
}

export default DemoHeader;
