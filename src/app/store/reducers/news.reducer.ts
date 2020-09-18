import { NewsActions } from "./../actions/news.actions";
import { Action } from "@ngrx/store";
import { News } from "../../model/news";

// define actions
export const LOAD_SECTION_NEWS = "[News] LOAD_SECTION_NEWS";
export const FILTER_SUBSECTION = "[News] FILTER_SUBSECTION";

// define state interface
export interface NewsState {
  newsList: News[];
  filter: string;
}

// initial state
export const initialState: NewsState = {
  newsList: [],
  filter: "",
};

// implement actions
export function news(state = initialState, action: Action) {
  switch (action.type) {
    case LOAD_SECTION_NEWS: {
      //   console.log("Inside load section news");
      return {
        newsList: [...action.payload],
        filter: "",
      };
    }
    case FILTER_SUBSECTION: {
      console.log("inside filtersubsection");
      console.log(state.newsList);
      console.log(action.payload);
      return {
        newsList: [...state.newsList],
        filter: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}

export const getNewsList = (state: any) => {};

export const getFilter = (state: any) => {};
