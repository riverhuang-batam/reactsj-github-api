import React from 'react';
import {storiesOf} from '@storybook/react';
import {Button} from '@storybook/react/demo';

console.log('helo');
storiesOf  ('Button',module)
.add ('with text', ()=> (
    <button>hello button</button>
))