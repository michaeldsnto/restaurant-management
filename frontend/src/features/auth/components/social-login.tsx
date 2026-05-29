export function SocialLogin() {
  return (
    <>
      <div className="my-5 flex items-center gap-3 text-xs text-slate-500">
        <div className="h-px flex-1 bg-white/8" />
        Or continue with
        <div className="h-px flex-1 bg-white/8" />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button type="button" className="rounded-xl border border-white/8 bg-[#11161d] px-4 py-3 text-sm text-white">
          G
        </button>
        <button type="button" className="rounded-xl border border-white/8 bg-[#11161d] px-4 py-3 text-sm text-white">
          Apple
        </button>
      </div>
    </>
  )
}
