import GlobalStyles from '@mui/material/GlobalStyles';
import { styled } from '@mui/material/styles';
import FusePageCarded from '@fuse/core/FusePageCarded/FusePageCarded.jsx';
import { useEffect, useState } from 'react';
import SubCategoriesTable from './SubCategoriesTable.jsx';

import useThemeMediaQuery from '../../../../@fuse/hooks/useThemeMediaQuery.js';
import DemoHeader from '../../user-interface/page-layouts/shared-components/DemoHeader.jsx';

/**
 * The SubCategories page.
 */
function SubCategories() {
	const breadcrumbs = [
		{ label: 'داشبورد', href: '/' },
		{ label: 'مدیریت دسته‌بندی‌ها', href: '/category' },
		{ label: 'مدیریت زیرشاخه‌ها', href: '/subcategory' }
	];
	const Root = styled(FusePageCarded)({
		'& .FusePageCarded-header': {},
		'& .FusePageCarded-toolbar': {},
		'& .FusePageCarded-content': {},
		'& .FusePageCarded-sidebarHeader': {},
		'& .FusePageCarded-sidebarContent': {}
	});

	// return (
	const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
	const [leftSidebarOpen, setLeftSidebarOpen] = useState(!isMobile);
	const [rightSidebarOpen, setRightSidebarOpen] = useState(!isMobile);
	useEffect(() => {
		setLeftSidebarOpen(!isMobile);
		setRightSidebarOpen(!isMobile);
	}, [isMobile]);
	return (
		<>
			<GlobalStyles
				styles={() => ({
					'#root': {
						maxHeight: '100vh'
					}
				})}
			/>
			<Root
				header={
					<DemoHeader
						title="مدیریت زیرشاخه‌ها"
						breadcrumbs={breadcrumbs}
						leftSidebarToggle={() => {
							setLeftSidebarOpen(!leftSidebarOpen);
						}}
						// rightSidebarToggle={() => {
						// 	setRightSidebarOpen(!rightSidebarOpen);
						// }}
					/>
				}
				content={
					<div className="w-full h-full container flex flex-col">
						{/* <SubCategoriesHeader /> */}
						<SubCategoriesTable />
					</div>
				}
				// leftSidebarOpen={leftSidebarOpen}
				// leftSidebarOnClose={() => {
				// 	setLeftSidebarOpen(false);
				// }}
				// leftSidebarContent={<DemoSidebar />}
				scroll="normal"
			/>
		</>
	);
}

export default SubCategories;
