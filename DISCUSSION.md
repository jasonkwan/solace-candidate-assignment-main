### Changes
1. Added searchTerm state and remove filteredAdvocates state (as it's derived from searchTerm and advocates states) - searchTerm is also used to update the searching text and bind to input value when clicking Reset Search button.

2. Since the number of advocates can go up to "hundreds of thousands", we should implement a server-side search query to fetch data based on searchTerm (also pagination but not implemented). Eliminating client-side filtering

3. Lastly, added debounce to the SearchTerm to reduce/throttle the number of search requests

### Major Suggestions
1. It is almost required to implement pagination due to the high number of advocates.

2. In additions, it's recommended to add some `ElasticSearch` like service to fully index advocate table.  This will greatly improve overall performance.


### Other Suggestions
1. Refactor and create an AdvocateTable component under app/components/ folder

2. Consider implementing case insensitive search

3. Didn't have time to enhance the styles. Instead of modifying the styles of each tag, consider adapting the material-ui components to replace all/most native html tags (eg. table -> Table, input -> TextField etc). They are proven and well tuned to provide consistent ui. Eventually, consider developing/adapting to some set of company-wide `Design System` components to unify ui/styles. 
