import { Survey } from "../config";

type Props = { result: Survey }
const Result = (props: Props) => {

  return (
    <ol>
      <li><a href={'https://ggsc.berkeley.edu/images/uploads/The_Mindful_Attention_Awareness_Scale_-_Trait_(1).pdf'}>
        The Mindful Attention Awareness Scale (MAAS), <em>ggsc.berkeley.edu</em>
      </a></li>
      <li><a href={'https://ggsc.berkeley.edu/images/uploads/The_Mindful_Attention_Awareness_Scale_-_Trait_(1).pdf'}>
        The Mindful Attention Awareness Scale: Further
        Examination of Dimensionality, Reliability, and
        Concurrent Validity Estimates, <em>Journal of Personality Assessment</em>
      </a></li>
    </ol>
  );
};

export default Result;
