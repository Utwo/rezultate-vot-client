import {
  ElectionBallot,
  ElectionBallotMeta,
  ElectionObservationSection,
  ElectionScopeIncomplete,
  ElectionScopeIncompleteResolved,
  ElectionTurnoutSection,
} from "@code4ro/reusable-components";
import React from "react";
import { EmbedButton } from "./EmbedButton";

type Props = {
  meta?: ElectionBallotMeta | null;
  ballot?: ElectionBallot | null;
  scope: ElectionScopeIncompleteResolved;
  onScopeChange?: (scope: ElectionScopeIncomplete) => unknown;
};

export const TurnoutTab: React.FC<Props> = ({ meta, ballot, scope, onScopeChange }) => {
  return (
    <>
      <div className="relative">
        <EmbedButton path={`${meta?.ballotId}/turnout`} />
        <ElectionTurnoutSection meta={meta} scope={scope} onScopeChange={onScopeChange} turnout={ballot?.turnout} />
      </div>
      <div className="relative">
        <EmbedButton path={`${meta?.ballotId}/observation`} />
        {ballot?.observation && <ElectionObservationSection observation={ballot.observation} />}
      </div>
    </>
  );
};
