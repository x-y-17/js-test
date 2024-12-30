import assert from "assert";

function isSameWeek(date) {
  const now = new Date();
  const targetDate = new Date(date);

  // 计算目标日期与当前日期相差的天数
  const diff = Math.abs(targetDate.getTime() - now.getTime()) / 86400000;

  // 获取当前日期和目标日期的星期几（0-6）
  const nowDay = now.getDay();
  const targetDay = targetDate.getDay();

  // 如果相差不超过7天，并且在同一周内，则返回true
  return diff < 7 && (nowDay - targetDay + 7) % 7 < 7;
}
function runTests() {
  // 测试1：当前日期应该返回 true
  assert.strictEqual(isSameWeek(new Date()), true, "当前日期应该在同一周");

  // 测试2：昨天的日期应该返回 true
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  assert.strictEqual(isSameWeek(yesterday), true, "昨天应该在同一周");

  // 测试3：下周的日期应该返回 false
  const nextWeek = new Date();
  nextWeek.setDate(nextWeek.getDate() + 7);
  assert.strictEqual(isSameWeek(nextWeek), false, "下周的日期不应该在同一周");

  // 测试4：上周的日期应该返回 false
  const lastWeek = new Date();
  lastWeek.setDate(lastWeek.getDate() - 7);
  assert.strictEqual(isSameWeek(lastWeek), false, "上周的日期不应该在同一周");

  // 测试5：本周的周日应该返回 true
  const sunday = new Date();
  sunday.setDate(sunday.getDate() - sunday.getDay());
  assert.strictEqual(isSameWeek(sunday), true, "本周日应该在同一周");

  // 测试6：本周的周六应该返回 true
  const saturday = new Date();
  saturday.setDate(saturday.getDate() + (6 - saturday.getDay()));
  assert.strictEqual(isSameWeek(saturday), true, "本周六应该在同一周");

  console.log("所有测试通过！");
}

runTests();
