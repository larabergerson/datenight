import React from "react";

export default function Options()
{
    return (
        <div className="list-group options">
        <a href="#" className="list-group-item list-group-item-action active">
            Choose a subject: 
        </a>
        <a href="/api/restaurants" className="list-group-item list-group-item-action">Restaurants</a>
        <a href="#" className="list-group-item list-group-item-action">Concerts</a>
        <a href="#" className="list-group-item list-group-item-action">Movies</a>
        <a href="#" className="list-group-item list-group-item-action disabled" tabindex="-1" aria-disabled="true">Street Fests</a>
  </div>
    )}


