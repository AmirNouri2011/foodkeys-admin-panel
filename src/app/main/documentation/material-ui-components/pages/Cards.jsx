import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DocumentationPageBreadcrumb from '../../DocumentationPageBreadcrumb';
import BasicCardComponent from '../components/cards/BasicCard';
import BasicCardRaw from '../components/cards/BasicCard.jsx?raw';
import OutlinedCardComponent from '../components/cards/OutlinedCard';
import OutlinedCardRaw from '../components/cards/OutlinedCard.jsx?raw';
import RecipeReviewCardComponent from '../components/cards/RecipeReviewCard';
import RecipeReviewCardRaw from '../components/cards/RecipeReviewCard.jsx?raw';
import MediaCardComponent from '../components/cards/MediaCard';
import MediaCardRaw from '../components/cards/MediaCard.jsx?raw';
import ImgMediaCardComponent from '../components/cards/ImgMediaCard';
import ImgMediaCardRaw from '../components/cards/ImgMediaCard.jsx?raw';
import ActionAreaCardComponent from '../components/cards/ActionAreaCard';
import ActionAreaCardRaw from '../components/cards/ActionAreaCard.jsx?raw';
import MultiActionAreaCardComponent from '../components/cards/MultiActionAreaCard';
import MultiActionAreaCardRaw from '../components/cards/MultiActionAreaCard.jsx?raw';
import MediaControlCardComponent from '../components/cards/MediaControlCard';
import MediaControlCardRaw from '../components/cards/MediaControlCard.jsx?raw';
function CardsDoc(props) {
    return (<>
			<div className="flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between">
				<DocumentationPageBreadcrumb />
				<Button className="normal-case" variant="contained" color="secondary" component="a" href="https://mui.com/components/cards" target="_blank" role="button" size="small" startIcon={<FuseSvgIcon size={20}>heroicons-outline:external-link</FuseSvgIcon>}>
					Reference
				</Button>
			</div>
			<Typography className="text-32 my-16 font-700" component="h1">
				Card
			</Typography>
			<Typography className="description">Cards contain content and actions about a single subject.</Typography>

			<Typography className="text-24 mt-24 mb-10 font-700" component="h2">
				Introduction
			</Typography>
			<Typography className="text-14 mb-32" component="div">
				Cards are surfaces that display content and actions on a single topic. The Material UI Card component
				includes several complementary utility components to handle various use cases:
			</Typography>
			<ul className="space-y-16">
				<li>Card: a surface-level container for grouping related components.</li>
				<li>Card Content: the wrapper for the Card content.</li>
				<li>Card Header: an optional wrapper for the Card header.</li>
				<li>
					Card Media: an optional container for displaying background images and gradient layers behind the
					Card Content.
				</li>
				<li>Card Actions: an optional wrapper that groups a set of buttons.</li>
				<li>
					Card Action Area: an optional wrapper that allows users to interact with the specified area of the
					Card.
				</li>
			</ul>
			<Typography className="text-14 mb-32" component="div">
				<FuseExample name="BasicCard.js" className="my-16" iframe={false} component={BasicCardComponent} raw={BasicCardRaw}/>
			</Typography>
			<Typography className="text-24 mt-24 mb-10 font-700" component="h2">
				Basics
			</Typography>

			<FuseHighlight component="pre" className="language-jsx">
				{` 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
`}
			</FuseHighlight>
			<Typography className="text-14 mb-32" component="div">
				:::success Although cards can support multiple actions, UI controls, and an overflow menu, use restraint
				and remember that cards are meant to be entry points to more complex and detailed information. :::
			</Typography>
			<Typography className="text-16 mt-20 mb-10 font-700" component="h3">
				Outlined Card
			</Typography>
			<Typography className="text-14 mb-32" component="div">
				Set <code>{`variant="outlined"`}</code> to render an outlined card.
			</Typography>
			<Typography className="text-14 mb-32" component="div">
				<FuseExample name="OutlinedCard.js" className="my-16" iframe={false} component={OutlinedCardComponent} raw={OutlinedCardRaw}/>
			</Typography>
			<Typography className="text-24 mt-24 mb-10 font-700" component="h2">
				Complex Interaction
			</Typography>
			<Typography className="text-14 mb-32" component="div">
				On desktop, card content can expand. (Click the downward chevron to view the recipe.)
			</Typography>
			<Typography className="text-14 mb-32" component="div">
				<FuseExample name="RecipeReviewCard.js" className="my-16" iframe={false} component={RecipeReviewCardComponent} raw={RecipeReviewCardRaw}/>
			</Typography>
			<Typography className="text-24 mt-24 mb-10 font-700" component="h2">
				Media
			</Typography>
			<Typography className="text-14 mb-32" component="div">
				Example of a card using an image to reinforce the content.
			</Typography>
			<Typography className="text-14 mb-32" component="div">
				<FuseExample name="MediaCard.js" className="my-16" iframe={false} component={MediaCardComponent} raw={MediaCardRaw}/>
			</Typography>
			<Typography className="text-14 mb-32" component="div">
				By default, we use the combination of a <code>{`<div>`}</code> element and a <em>background image</em>{' '}
				to display the media. It can be problematic in some situations, for example, you might want to display a
				video or a responsive image. Use the <code>component</code> prop for these use cases:
			</Typography>
			<Typography className="text-14 mb-32" component="div">
				<FuseExample name="ImgMediaCard.js" className="my-16" iframe={false} component={ImgMediaCardComponent} raw={ImgMediaCardRaw}/>
			</Typography>
			<Typography className="text-14 mb-32" component="div">
				:::warning When <code>{`component="img"`}</code>, CardMedia relies on <code>object-fit</code> for
				centering the image. It&#39;s not supported by IE11. :::
			</Typography>
			<Typography className="text-24 mt-24 mb-10 font-700" component="h2">
				Primary action
			</Typography>
			<Typography className="text-14 mb-32" component="div">
				Often a card allow users to interact with the entirety of its surface to trigger its main action, be it
				an expansion, a link to another screen or some other behavior. The action area of the card can be
				specified by wrapping its contents in a <code>CardActionArea</code> component.
			</Typography>
			<Typography className="text-14 mb-32" component="div">
				<FuseExample name="ActionAreaCard.js" className="my-16" iframe={false} component={ActionAreaCardComponent} raw={ActionAreaCardRaw}/>
			</Typography>
			<Typography className="text-14 mb-32" component="div">
				A card can also offer supplemental actions which should stand detached from the main action area in
				order to avoid event overlap.
			</Typography>
			<Typography className="text-14 mb-32" component="div">
				<FuseExample name="MultiActionAreaCard.js" className="my-16" iframe={false} component={MultiActionAreaCardComponent} raw={MultiActionAreaCardRaw}/>
			</Typography>
			<Typography className="text-24 mt-24 mb-10 font-700" component="h2">
				UI Controls
			</Typography>
			<Typography className="text-14 mb-32" component="div">
				Supplemental actions within the card are explicitly called out using icons, text, and UI controls,
				typically placed at the bottom of the card.
			</Typography>
			<Typography className="text-14 mb-32" component="div">
				Here&#39;s an example of a media control card.
			</Typography>
			<Typography className="text-14 mb-32" component="div">
				<FuseExample name="MediaControlCard.js" className="my-16" iframe={false} component={MediaControlCardComponent} raw={MediaControlCardRaw}/>
			</Typography>
			<Typography className="text-14 mb-32" component="div">
				🎨 If you are looking for inspiration, you can check{' '}
				<a href="https://mui-treasury.com/?path=/docs/card-introduction--docs">
					MUI Treasury&#39;s customization examples
				</a>
				.
			</Typography>
		</>);
}
export default CardsDoc;
