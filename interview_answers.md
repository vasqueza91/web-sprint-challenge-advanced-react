# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?

Stateful components store data which will re-render whenever it is changed.
Functional components render JSX and cannot be changed. 

2. When does a componentWillMount function be called? What about a componentWillUpdate?

componentWillMount is called when a component is ready to render for the first time.
componentWillUpdate is called when a component needs to re-render and update.

3. Define stateful logic.

Stateful logic is logic that is built into a component. Stateful logic uses state that can handle click events, set toggle states, or format data before it gets displayed. 

4. What are the three step of creating a successful test? What is done in each phase?

Arrange - Arranges inputs and targets. Set up the test case
Act - Acts on the target behavior.
Assert - Verify your expected outcomes.
