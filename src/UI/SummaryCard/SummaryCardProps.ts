import { SummaryListItemProps } from '../SummaryList/SummaryList';

export interface CardAction {
  text: string;
  extendedText: string;
  action: string;
}

export interface SummaryCardProps {
  title: string;
  summaryList: SummaryListItemProps[];
  cardActions?: CardAction[];
  handleCardAction?: (action: string) => void;
}

export interface CardListAction {
  identifier: string;
  index: number;
  action: string;
}

export interface SummaryCardListCardProps {
  title: string;
  summaryList: SummaryListItemProps[];
  cardActions?: CardAction[];
}

export interface SummaryCardListProps {
  identifier: string;
  cards: SummaryCardListCardProps[];
  handleAction: (details: CardListAction) => void;
}
