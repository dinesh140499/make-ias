import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, setTab } from '../../../features/currentAffairsSlice';
import FilterTab from '../../../reusable/FilterTab';
import FilterPopup from '../../../reusable/FilterPopup';

const actionBtn = [
  {
    label: "Medium",
    options: [{ label: "Medium 1" }],
  },
  { label: "Daily Practice" },
  { label: "Yearly Update" },
  { label: "Daily Article" },
  { label: "Mains Value Additional" },
  { label: "Prelims Facts" },
];

const List = () => {
  const { filter, tab } = useSelector((state) => state.currentAffairsSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!tab) {
      dispatch(setTab(actionBtn[0].label));
    }
  }, [dispatch, tab]);

  const handleSelectTab = (obj) => {
    dispatch(setTab(obj.label));
  };

  const handleFilterDropdown = (obj) => {
    dispatch(setTab(obj.label));
    dispatch(setFilter({ modal: true, data: obj.options }));
  };

  return (
    <div className='mt-5 lg:mt-10 mb-7'>
      <div className='container95'>
        <div className='flex items-center justify-between'>
          <FilterTab
            tabNames={actionBtn}
            selectTab={tab}
            handleFilterDropdown={handleFilterDropdown}
            handleSelectTab={handleSelectTab}
            className={{ div: "gap-0", button: "lg:w-[182px]" }}
          />
        </div>
      </div>

      {filter.modal && Array.isArray(filter.data) && filter.data.length > 0 && (
        <FilterPopup
          heading={"Heading"}
          onClose={() => dispatch(setFilter({ modal: false }))}
        >
          {filter.data.map((item, i) => {
            const id = `filter-${i}-${item.label.replace(/\s+/g, '-')}`;
            return (
              <div className='flex items-center gap-3 mb-1' key={i}>
                <input type="checkbox" id={id} />
                <label htmlFor={id} className='capitalize'>{item.label}</label>
              </div>
            );
          })}

          {/* Example Listing (replace or remove as needed) */}
          <div className="radius7 mt-4">
            <h3 className='font15 capitalize theme-bg-black text-white px-3 py-2'>Daily Current Affairs</h3>
          </div>
        </FilterPopup>
      )}
    </div>
  );
};

export default List;
