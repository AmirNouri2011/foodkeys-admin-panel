import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import AvatarGroup from '@mui/material/AvatarGroup';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react';
import _ from '../../../@lodash/@lodash';
import JwtSignUpTab from './tabs/JwSignUpTab';
import FirebaseSignUpTab from './tabs/FirebaseSignUpTab';
import AwsSignUpTab from './tabs/AwsSignUpTab';

const tabs = [
	{
		id: 'jwt',
		title: 'JWT',
		logo: 'assets/images/logo/jwt.svg',
		logoClass: 'h-40 p-4 bg-black rounded-12'
	},
	{
		id: 'firebase',
		title: 'Firebase',
		logo: 'assets/images/logo/firebase.svg',
		logoClass: 'h-40'
	},
	{
		id: 'aws',
		title: 'AWS',
		logo: 'assets/images/logo/aws-amplify.svg',
		logoClass: 'h-40'
	}
];

/**
 * The sign up page.
 */
function SignUpPage() {
	const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);

	function handleSelectTab(id) {
		setSelectedTabId(id);
	}

	return (
		<div className="flex min-w-0 flex-1 flex-col items-center sm:flex-row sm:justify-center md:items-start md:justify-start">
			<Paper className="h-full w-full px-16 py-8 ltr:border-r-1 rtl:border-l-1 sm:h-auto sm:w-auto sm:rounded-2xl sm:p-48 sm:shadow md:flex md:h-full md:w-1/2 md:items-center md:justify-end md:rounded-none md:p-64 md:shadow-none">
				<div className="mx-auto w-full max-w-320 sm:mx-0 sm:w-320">
					<img
						className="w-48"
						src="assets/images/logo/logo.svg"
						alt="logo"
					/>

					<Typography className="mt-32 text-4xl font-extrabold leading-tight tracking-tight">
						Sign up
					</Typography>
					<div className="mt-2 flex items-baseline font-medium">
						<Typography>Already have an account?</Typography>
						<Link
							className="ml-4"
							to="/sign-in"
						>
							Sign in
						</Link>
					</div>

					<Tabs
						value={_.findIndex(tabs, { id: selectedTabId })}
						variant="fullWidth"
						className="w-full mt-24 mb-32"
						indicatorColor="secondary"
					>
						{tabs.map((item) => (
							<Tab
								onClick={() => handleSelectTab(item.id)}
								key={item.id}
								icon={
									<img
										className={item.logoClass}
										src={item.logo}
										alt={item.title}
									/>
								}
								className="min-w-0"
								label={item.title}
							/>
						))}
					</Tabs>

					{selectedTabId === 'jwt' && <JwtSignUpTab />}
					{selectedTabId === 'firebase' && <FirebaseSignUpTab />}
					{selectedTabId === 'aws' && <AwsSignUpTab />}
				</div>
			</Paper>

			<Box
				className="relative hidden h-full flex-auto items-center justify-center overflow-hidden p-64 md:flex lg:px-112"
				sx={{ backgroundColor: 'primary.main' }}
			>
				<svg
					className="pointer-events-none absolute inset-0"
					viewBox="0 0 960 540"
					width="100%"
					height="100%"
					preserveAspectRatio="xMidYMax slice"
					xmlns="http://www.w3.org/2000/svg"
				>
					<Box
						component="g"
						sx={{ color: 'primary.light' }}
						className="opacity-20"
						fill="none"
						stroke="currentColor"
						strokeWidth="100"
					>
						<circle
							r="234"
							cx="196"
							cy="23"
						/>
						<circle
							r="234"
							cx="790"
							cy="491"
						/>
					</Box>
				</svg>
				<Box
					component="svg"
					className="absolute -right-64 -top-64 opacity-20"
					sx={{ color: 'primary.light' }}
					viewBox="0 0 220 192"
					width="220px"
					height="192px"
					fill="none"
				>
					<defs>
						<pattern
							id="837c3e70-6c3a-44e6-8854-cc48c737b659"
							x="0"
							y="0"
							width="20"
							height="20"
							patternUnits="userSpaceOnUse"
						>
							<rect
								x="0"
								y="0"
								width="4"
								height="4"
								fill="currentColor"
							/>
						</pattern>
					</defs>
					<rect
						width="220"
						height="192"
						fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
					/>
				</Box>

				<div className="relative z-10 w-full max-w-2xl">
					<div className="text-7xl font-bold leading-none text-gray-100">
						<div>Welcome to</div>
						<div>our community</div>
					</div>
					<div className="mt-24 text-lg leading-6 tracking-tight text-gray-400">
							به داشبورد مدیریت سایت مرجع صنایع غذایی و کشاورزی ایران (سام) خوش آمدید! این پنل ویژه مدیران و کارمندان طراحی شده است تا کنترل کاملی بر روی سامانه‌های مختلف از جمله داشبورد کاربران، وب‌سایت اصلی، وبلاگ خبری و سایر سرویس‌های آینده داشته باشید.

							🔹 مدیریت کاربران و دسترسی‌ها
							🔹 نظارت و تنظیمات وب‌سایت و خدمات
							🔹 مدیریت محتوا، اخبار و اطلاعیه‌ها
							🔹 بررسی و پردازش درخواست‌های کاربران

							برای ورود، لطفاً اطلاعات حساب کاربری خود را وارد کنید. دسترسی شما بر اساس نقش تعیین‌شده در سامانه مشخص خواهد شد.
						</div>
					<div className="mt-32 flex items-center">
						<AvatarGroup
							sx={{
								'& .MuiAvatar-root': {
									borderColor: 'primary.main'
								}
							}}
						>
							<Avatar src="assets/images/avatars/female-18.jpg" />
							<Avatar src="assets/images/avatars/female-11.jpg" />
							<Avatar src="assets/images/avatars/male-09.jpg" />
							<Avatar src="assets/images/avatars/male-16.jpg" />
						</AvatarGroup>

						<div className="ml-16 font-medium tracking-tight text-gray-400">
							با ۱۷ سال تجربه و دانش در حوزه صنایع غذایی و کشاورزی
						</div>
					</div>
				</div>
			</Box>
		</div>
	);
}

export default SignUpPage;
