import React, {memo} from 'react';
import {useField} from 'formik';
import {RuleActionsType} from '@/constants/RuleActionsType';
import {RuleActionBreakpoint} from '../RuleActionBreakpoint';
import {RuleActionMutation} from '../RuleActionMutation';
import {RuleActionLocalResponse} from '../RuleActionLocalResponse';
import {RuleActionFailure} from '../RuleActionFailure';
import {RuleActionDelay} from '../RuleActionDelay';

export const RuleActionConfig = memo(function RuleActionConfig() {
	const [field] = useField<RuleActionsType>('actionType');

	switch (field.value) {
		case RuleActionsType.Breakpoint:
			return <RuleActionBreakpoint />;

		case RuleActionsType.Mutation:
			return <RuleActionMutation />;

		case RuleActionsType.LocalResponse:
			return <RuleActionLocalResponse />;

		case RuleActionsType.Failure:
			return <RuleActionFailure />;

		case RuleActionsType.Delay:
			return <RuleActionDelay />;
	}
});
