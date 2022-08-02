import React from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import Input from '../../../../components/Input';
import { QuestionFormValues, QuestionType } from '../../../../types/questions';
import QuestionTypeSelect from '../QuestionTypeSelect';

interface Props {
  index: number;
}

const QuestionComponent = ({ index }: Props) => {
  const { control } = useFormContext<QuestionFormValues>();
  const question = useWatch({ control, name: `questions.${index}` });

  switch (question.type) {
    case QuestionType.Checkbox:
    case QuestionType.Radiobutton:
      return (
        <>
          <Input<QuestionFormValues>
            name={`questions.${index}.title`}
            variant="outlined"
            label="Question title"
          />
          <QuestionTypeSelect questionPath={`questions.${index}`} />
        </>
      );
    case QuestionType.FreeText:
    case QuestionType.Number:
    default:
      return (
        <>
          <Input<QuestionFormValues>
            name={`questions.${index}.title`}
            variant="outlined"
            label="Question title"
          />
          <QuestionTypeSelect questionPath={`questions.${index}`} />
        </>
      );
  }
};

export default QuestionComponent;
