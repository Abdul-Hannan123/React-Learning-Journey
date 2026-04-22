import React from 'react'

const Card = (props) => {
  return (
    <div>
        <div class="job-card">
          <div class="card-header">
            <div class="logo">
              <img src={props.logoo} alt="Amazon" />
            </div>
            <button class="save-btn">Save <i class="far fa-bookmark"></i></button>
          </div>

          <div class="card-body">
            <div class="company-info">
              <span class="company-name">{props.cname}</span>
              <span class="post-date">{props.dago}</span>
            </div>
            <h2 class="job-title">{props.desig}</h2>
            <div class="tag-row">
              <span class="job-tag">{props.rl1}</span>
              <span class="job-tag">{props.rl2}</span>
            </div>
          </div>

          <div class="card-footer">
            <div class="salary-info">
              <div class="amount">${props.sal}</div>
              <div class="location">{props.loc}</div>
            </div>
            <button class="apply-btn">Apply now</button>
          </div>
        </div>
    </div>
  )
}

export default Card
