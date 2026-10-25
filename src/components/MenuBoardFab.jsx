/** Nút nổi góc trái màn hình — mở bảng thực đơn đa ngôn ngữ (MenuBoard) */
export default function MenuBoardFab({ onClick }) {
  return (
    <button className="menu-fab" onClick={onClick} aria-label="Xem thực đơn đa ngôn ngữ" title="Xem thực đơn">
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 11h18a9 9 0 0 1-9 9 9 9 0 0 1-9-9zM3 11l1.2-3M21 11l-1.2-3" />
        <path d="M8 7.5C8 6 9.5 6 9.5 4.5M12 7.5C12 6 13.5 6 13.5 4.5M16 7.5c0-1.5 1.5-1.5 1.5-3" />
      </svg>
      <span>Menu</span>
    </button>
  )
}
