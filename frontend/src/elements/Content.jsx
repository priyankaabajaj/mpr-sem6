function Content(){
  return(
    <div className="content-box">
      <div className="content-box-text">
        {/* logoline */}
        <div className="content-box-textLine>"><p id="content-box-textLine1">Find the right AI companion for you.</p></div>
        {/* searchbox */}
        <div className="content-box-search">
          <input placeholder="Search by tool name..." className="search-input"/>
          <div class="body-search-icon">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
      </div>
      {/* image */}
      <div class="home-img"></div>
    </div>
  )
}
export default Content