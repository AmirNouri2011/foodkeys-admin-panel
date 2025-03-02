import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import useThemeMediaQuery from "@fuse/hooks/useThemeMediaQuery";
import { Outlet, useLocation } from "react-router-dom";
import FusePageSimple from "@fuse/core/FusePageSimple";
import SettingsAppSidebarContent from "./SettingsAppSidebarContent";
import SettingsAppHeader from "./SettingsAppHeader";

const Root = styled(FusePageSimple)(() => ({
	"& .FusePageCarded-header": {},
	"& .FusePageCarded-sidebar": {},
	"& .FusePageCarded-leftSidebar": {},
}));

/**
 * The notes app.
 */
function SettingsApp() {
	const location = useLocation();
	const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down("lg"));
	const [leftSidebarOpen, setLeftSidebarOpen] = useState(!isMobile);
	useEffect(() => {
		setLeftSidebarOpen(!isMobile);
	}, [isMobile]);
	useEffect(() => {
		if (isMobile) {
			setLeftSidebarOpen(false);
		}
	}, [location, isMobile]);
	return (
		<Root
			content={
				<div className="flex-auto p-12 md:p-32 lg:p-48">
					<SettingsAppHeader
						className="mb-24 md:mb-32"
						onSetSidebarOpen={setLeftSidebarOpen}
					/>
					<Outlet />
				</div>
			}
			leftSidebarOpen={leftSidebarOpen}
			leftSidebarOnClose={() => {
				setLeftSidebarOpen(false);
			}}
			leftSidebarContent={
				<SettingsAppSidebarContent onSetSidebarOpen={setLeftSidebarOpen} />
			}
			leftSidebarWidth={380}
			scroll={isMobile ? "normal" : "content"}
		/>
	);
}

export default SettingsApp;
