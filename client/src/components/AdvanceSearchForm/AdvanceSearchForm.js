const AdvanceSearchForm = () => {
    return (
        <div className="advance-search">
            {/*advance search form*/}
            <div className="container">
                <div className="wrapper-search">
                    <div className="container-tags">
                        <span className="tag">
                            <span className="tag-inner">
                                Find Recipes <i className="fa fa-angle-down" />
                            </span>
                        </span>
                    </div>
                    <div className="outer-advance-search">
                        <form action="#" id="advance-search">
                            <fieldset>
                                <div className="inner-advance-search">
                                    <div className="form-field">
                                        <label htmlFor="ingredient">ingredient</label>
                                        <select
                                            name="ingredient"
                                            id="ingredient"
                                            className="advance-selectable"
                                        >
                                            <option defaultValue="ing1">
                                                Any Ingredient
                                            </option>
                                            <option defaultValue="ing2">Butter</option>
                                            <option defaultValue="ing3">Cheese</option>
                                            <option defaultValue="ing4">Cream</option>
                                            <option defaultValue="ing5">Yeast</option>
                                        </select>
                                    </div>
                                    <div className="form-field">
                                        <label htmlFor="course">course</label>
                                        <select
                                            name="course"
                                            id="course"
                                            className="advance-selectable"
                                        >
                                            <option defaultValue="ing1">
                                                Any Course
                                            </option>
                                            <option defaultValue="ing2">Butter</option>
                                            <option defaultValue="ing3">Cheese</option>
                                            <option defaultValue="ing4">Cream</option>
                                            <option defaultValue="ing5">Yeast</option>
                                        </select>
                                    </div>
                                    <div className="form-field">
                                        <label htmlFor="cuisine">cuisine</label>
                                        <select
                                            name="cuisine"
                                            id="cuisine"
                                            className="advance-selectable"
                                        >
                                            <option defaultValue="ing1">
                                                Any Cuisine
                                            </option>
                                            <option defaultValue="ing2">Butter</option>
                                            <option defaultValue="ing3">Cheese</option>
                                            <option defaultValue="ing4">Cream</option>
                                            <option defaultValue="ing5">Yeast</option>
                                        </select>
                                    </div>
                                    <div className="form-field">
                                        <label htmlFor="time">Cooking Time</label>
                                        <select name="time" id="time" className="advance-selectable">
                                            <option defaultValue="ing1">
                                                Any Cooking Time
                                            </option>
                                            <option defaultValue="ing2">Butter</option>
                                            <option defaultValue="ing3">Cheese</option>
                                            <option defaultValue="ing4">Cream</option>
                                            <option defaultValue="ing5">Yeast</option>
                                        </select>
                                    </div>
                                    <div className="form-field">
                                        <label htmlFor="calories">calories</label>
                                        <select
                                            name="calories"
                                            id="calories"
                                            className="advance-selectable"
                                        >
                                            <option defaultValue="ing1">
                                                Any Calories
                                            </option>
                                            <option defaultValue="ing2">Butter</option>
                                            <option defaultValue="ing3">Cheese</option>
                                            <option defaultValue="ing4">Cream</option>
                                            <option defaultValue="ing5">Yeast</option>
                                        </select>
                                    </div>
                                    <button type="submit">
                                        <i className="fa fa-search" />
                                    </button>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
            {/*advance search form ends*/}
        </div>
    );
}

export default AdvanceSearchForm;