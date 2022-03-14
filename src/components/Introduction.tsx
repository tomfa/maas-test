import RangeInput from "./RangeInput";
import {MaasQuestion} from "../config";

const Introduction = () => {
  return (
    <div>
      <p>
        The trait MAAS is a 15-item scale designed to assess a core characteristic of mindfulness,
        namely, a receptive state of mind in which attention, informed by a sensitive awareness of what
        is occurring in the present, simply observes what is taking place.
      </p>

      <p>
      Brown, K.W. & Ryan, R.M. (2003). The benefits of being present: Mindfulness and its role in
        psychological well-being. Journal of Personality and Social Psychology, 84, 822-848.
      </p>

      <p>
        Carlson, L.E. & Brown, K.W. (2005). Validation of the Mindful Attention Awareness Scale in a
        cancer population. Journal of Psychosomatic Research, 58, 29-33.
      </p>

      <p><strong>
        Instructions:</strong> Below is a collection of statements about your everyday experience. Using the 1-6
        scale below, please indicate how frequently or infrequently you currently have each experience.
        Please answer according to what really reflects your experience rather than what you think your
        experience should be. Please treat each item separately from every other item.
      </p>
    </div>
  );
};

export default Introduction;
