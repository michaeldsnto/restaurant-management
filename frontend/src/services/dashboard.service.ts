import { api } from "@/api/axios"

export async function fetchDashboardOverview(branchId?: number) {
  const { data } = await api.get("/dashboard/overview", {
    params: {
      restaurant_branch_id: branchId,
    },
  })

  return data
}
