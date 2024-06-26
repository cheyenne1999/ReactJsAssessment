
import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
<div class="card text-center">
  <div class="card-header">
  <h2>About Me</h2>
  </div>
  <div class="card-body">
    <h5 class="card-title">React Js Assessment </h5>
    <p class="card-text">I documented my reflections while working on this assessment. Balancing this task with work, personal life, and other commitments has been challenging. I acknowledge that the outcome may not be perfect. This assessment marked my first exposure to Redux, a tool I was unfamiliar with until now. I appreciate the opportunity, as it has allowed me to explore Redux and gain valuable insights. Thank you for this learning experience.</p>
    <Link to="/" class="btn btn-primary">Home</Link>
  </div>
  <div class="card-footer text-muted">
    Cheyenne
  </div>
</div>
    )
}
 
export default Contact