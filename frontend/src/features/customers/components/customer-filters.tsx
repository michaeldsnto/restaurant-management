import React from 'react';

interface CustomerFiltersProps {
  onStatusChange?: (status: string | null) => void;
  onSortChange?: (sortBy: string) => void;
  currentStatus?: string | null;
  currentSort?: string;
}

export const CustomerFilters: React.FC<CustomerFiltersProps> = ({
  onStatusChange,
  onSortChange,
  currentStatus = null,
  currentSort = 'name',
}) => {
  return (
    <div className="flex gap-4 flex-wrap">
      <div>
        <label className="text-sm font-medium">Status:</label>
        <select
          value={currentStatus || ''}
          onChange={(e) => onStatusChange?.(e.target.value || null)}
          className="ml-2 px-3 py-1 border rounded-lg"
        >
          <option value="">All</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
          <option value="banned">Banned</option>
        </select>
      </div>

      <div>
        <label className="text-sm font-medium">Sort By:</label>
        <select
          value={currentSort}
          onChange={(e) => onSortChange?.(e.target.value)}
          className="ml-2 px-3 py-1 border rounded-lg"
        >
          <option value="name">Name</option>
          <option value="points">Loyalty Points</option>
          <option value="spent">Total Spent</option>
          <option value="recent">Recently Added</option>
        </select>
      </div>
    </div>
  );
};
