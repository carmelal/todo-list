import {useState, useCallback} from 'react';
import {Checkbox} from '@shopify/polaris';

function Task({task}) {
  const [checked, setChecked] = useState(false);
  const handleChange = useCallback((newChecked) => setChecked(newChecked), []);

  return (
    <div>
      <Checkbox
        label={task}
        checked={checked}
        onChange={handleChange}
      />
      <br/>
    </div>
  );
}

export {Task};
