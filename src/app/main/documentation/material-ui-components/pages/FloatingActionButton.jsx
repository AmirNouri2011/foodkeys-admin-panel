import FuseExample from '@fuse/core/FuseExample';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DocumentationPageBreadcrumb from '../../DocumentationPageBreadcrumb';
import FloatingActionButtonsComponent from '../components/floating-action-button/FloatingActionButtons';
import FloatingActionButtonsRaw from '../components/floating-action-button/FloatingActionButtons.jsx?raw';
import FloatingActionButtonSizeComponent from '../components/floating-action-button/FloatingActionButtonSize';
import FloatingActionButtonSizeRaw from '../components/floating-action-button/FloatingActionButtonSize.jsx?raw';
import FloatingActionButtonExtendedSizeComponent from '../components/floating-action-button/FloatingActionButtonExtendedSize';
import FloatingActionButtonExtendedSizeRaw from '../components/floating-action-button/FloatingActionButtonExtendedSize.jsx?raw';
import FloatingActionButtonZoomComponent from '../components/floating-action-button/FloatingActionButtonZoom';
import FloatingActionButtonZoomRaw from '../components/floating-action-button/FloatingActionButtonZoom.jsx?raw';
function FloatingActionButtonDoc(props) {
    return (<>
			<div className="flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between">
				<DocumentationPageBreadcrumb />
				<Button className="normal-case" variant="contained" color="secondary" component="a" href="https://mui.com/components/floating-action-button" target="_blank" role="button" size="small" startIcon={<FuseSvgIcon size={20}>heroicons-outline:external-link</FuseSvgIcon>}>
					Reference
				</Button>
			</div>
			<Typography className="text-32 my-16 font-700" component="h1">
				Floating Action Button
			</Typography>
			<Typography className="description">
				A Floating Action Button (FAB) performs the primary, or most common, action on a screen.
			</Typography>

			<Typography className="text-14 mb-32" component="div">
				A floating action button appears in front of all screen content, typically as a circular shape with an
				icon in its center. FABs come in two types: regular, and extended.
			</Typography>
			<Typography className="text-14 mb-32" component="div">
				Only use a FAB if it is the most suitable way to present a screen&#39;s primary action. Only one
				component is recommended per screen to represent the most common action.
			</Typography>
			<Typography className="text-24 mt-24 mb-10 font-700" component="h2">
				Basic FAB
			</Typography>
			<Typography className="text-14 mb-32" component="div">
				<FuseExample name="FloatingActionButtons.js" className="my-16" iframe={false} component={FloatingActionButtonsComponent} raw={FloatingActionButtonsRaw}/>
			</Typography>
			<Typography className="text-24 mt-24 mb-10 font-700" component="h2">
				Size
			</Typography>
			<Typography className="text-14 mb-32" component="div">
				By default, the size is <code>large</code>. Use the <code>size</code> prop for smaller floating action
				buttons.
			</Typography>
			<Typography className="text-14 mb-32" component="div">
				<FuseExample name="FloatingActionButtonSize.js" className="my-16" iframe={false} component={FloatingActionButtonSizeComponent} raw={FloatingActionButtonSizeRaw}/>
				<FuseExample name="FloatingActionButtonExtendedSize.js" className="my-16" iframe={false} component={FloatingActionButtonExtendedSizeComponent} raw={FloatingActionButtonExtendedSizeRaw}/>
			</Typography>
			<Typography className="text-24 mt-24 mb-10 font-700" component="h2">
				Animation
			</Typography>
			<Typography className="text-14 mb-32" component="div">
				The floating action button animates onto the screen as an expanding piece of material, by default.
			</Typography>
			<Typography className="text-14 mb-32" component="div">
				A floating action button that spans multiple lateral screens (such as tabbed screens) should briefly
				disappear, then reappear if its action changes.
			</Typography>
			<Typography className="text-14 mb-32" component="div">
				The Zoom transition can be used to achieve this. Note that since both the exiting and entering
				animations are triggered at the same time, we use <code>enterDelay</code> to allow the outgoing Floating
				Action Button&#39;s animation to finish before the new one enters.
			</Typography>
			<Typography className="text-14 mb-32" component="div">
				<FuseExample name="FloatingActionButtonZoom.js" className="my-16" iframe={false} component={FloatingActionButtonZoomComponent} raw={FloatingActionButtonZoomRaw}/>
			</Typography>
		</>);
}
export default FloatingActionButtonDoc;
