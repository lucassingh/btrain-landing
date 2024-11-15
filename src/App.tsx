import { ApplicationComponent, FooterComponent, ForWhoComponent, HomeComponent, IntegrationComponent, NavBar, ReviewsComponent, StepsComponents, TrainingComponent, UniversityComponent } from './components';

function App() {

	return (
		<>
			<NavBar />
			<HomeComponent />
			<UniversityComponent />
			<ApplicationComponent />
			<StepsComponents />
			<ForWhoComponent />
			<TrainingComponent />
			<IntegrationComponent />
			<ReviewsComponent />
			<FooterComponent />
		</>
	)
}

export default App
