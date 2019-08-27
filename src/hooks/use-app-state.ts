import { AppState } from "../store";
import { useSelector } from "react-redux";

export function useAppState<TSelected>(selector: (state: AppState) => TSelected) {
  return useSelector<AppState, TSelected>(selector);
}