import TripInfoView from './view/trip-info-view';
import TripFiltersView from './view/trip-filters-view';
import TripSortView from './view/trip-sort-view';
import TripEventsView from './view/trip-events-view';
import { render } from './render';

export default class TripPresenter {
  tripInfoComponent = new TripInfoView();
  tripFiltersComponent = new TripFiltersView();
  tripSortComponent = new TripSortView();
  tripEventsComponent = new TripEventsView();

  constructor({eventsContainer}) {
    this.eventsContainer = eventsContainer;
  }

  init() {
    render(this.tripSortComponent, this.eventsContainer);
    render(this.tripEventsComponent, this.eventsContainer);
  }
}
