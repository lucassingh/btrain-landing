import { ApplicationComponent, FloatingButtons, FooterComponent, ForWhoComponent, HomeComponent, IntegrationComponent, NavBar, ReviewsComponent, StepsComponents, TrainingComponent, UniversityComponent } from './components';

function App() {

	return (
		<>
			<NavBar />
			<HomeComponent />
			<div id="university-section">
                <UniversityComponent />
            </div>
			<ApplicationComponent />
			<StepsComponents />
			<ForWhoComponent />
			<TrainingComponent />
			<IntegrationComponent />
			{/*<ReviewsComponent />*/}
			<FooterComponent />
			<FloatingButtons />
		</>
	)
}

export default App
