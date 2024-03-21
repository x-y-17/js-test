package cn.udinghuo.model.voucher.order.vo;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;

import org.springframework.util.Assert;
import java.io.Serializable;
import cn.udinghuo.model.orginazation.agent.vo.AgentInfoVo;	
import cn.udinghuo.model.archives.common.ApiSource;	
import cn.udinghuo.model.archives.bank.vo.Bank;	
import java.math.BigDecimal;	
import cn.udinghuo.model.orginazation.user.vo.ContacterVo;	
import cn.udinghuo.model.currency.currency.vo.CurrencyVo;	
import com.fasterxml.jackson.annotation.JsonFormat;	
import java.util.List;	
import java.time.LocalDate;	
import java.time.LocalDateTime;	
import java.util.Map;	
import cn.udinghuo.model.voucher.order.vo.OrderAttachmentModelVo;	
import cn.udinghuo.model.voucher.order.vo.OrderBizGroupVo;	
import cn.udinghuo.model.voucher.order.OrderCoupons;	
import cn.udinghuo.model.voucher.order.OrderDefine;	
import cn.udinghuo.model.voucher.order.vo.OrderDetailGroupModelVo;	
import cn.udinghuo.model.voucher.order.vo.OrderDetailGroupSuiteVo;	
import cn.udinghuo.model.voucher.order.vo.OrderDetailModelVo;	
import cn.udinghuo.model.voucher.order.vo.OrderDetailVo;	
import cn.udinghuo.model.voucher.order.OrderOccupyInventoryEnum;	
import cn.udinghuo.model.voucher.order.OrderPayWay;	
import cn.udinghuo.model.voucher.order.OrderPrice;	
import cn.udinghuo.model.voucher.order.OrderRequestTypeEnum;	
import cn.udinghuo.model.voucher.order.OrderStatusEnum;	
import cn.udinghuo.model.voucher.order.vo.OrderStatusVo;	
import cn.udinghuo.model.voucher.rebate.vo.RebateVo;	
import cn.udinghuo.model.voucher.common.vo.SettlementWayModelVo;	
import cn.udinghuo.model.orginazation.agent.vo.ShipToAddressVo;	
import cn.udinghuo.model.voucher.common.vo.ShippingChoiceModelVo;	
import cn.udinghuo.model.voucher.order.vo.StatusEnumModelVo;	
import cn.udinghuo.model.voucher.order.vo.StatusEnumVo;	
import cn.udinghuo.model.voucher.common.vo.TransactionTypeModelVo;	
import cn.udinghuo.core.context.UserType;	
import cn.udinghuo.model.goods.promotion.calc.vo.Voucher;	
import cn.udinghuo.model.voucher.common.vo.VoucherAgentModelVo;	
import cn.udinghuo.model.voucher.order.vo.VoucherMemoModelVo;	
import cn.udinghuo.model.voucher.vouchernum.VoucherPaymentStatusEnum;	
import cn.udinghuo.model.voucher.vouchernum.VoucherType;	
import cn.udinghuo.model.voucher.common.vo.VoucherUserModelVo;	

/**
 * @author xufla
 *	订单主表
 */
public class OrderModelVo  implements Serializable {

	private static final long serialVersionUID = 8339817577960687820L;
	/**
	* id
	*/
	private Long id;
	/**
	* 订单号
	*/
	private String cOrderNo;
	/**
	* 预售id
	*/
	private Long presaleId;
	/**
	* 父级订单号
	*/
	private String cParentOrderNo;
	/**
	* 客户id
	*/
	private Long iAgentId;
	/**
	* 企业业务员
	*/
	private Long iCorpContactId;
	/**
	* 业务员姓名
	*/
	private String cCorpContactUserName;
	/**
	* 业务员erp编码
	*/
	private String cCorpContactUserErpCode;
	/**
	* 单据联系人
	*/
	private String cReceiveContacter;
	/**
	* 单据联系人电话
	*/
	private String cReceiveContacterPhone;
	/**
	* 标记锁
	*/
	private Boolean bLockIn;
	/**
	* 单据来源（PC，移动）
	*/
	private Short cSource;
	/**
	* API来源
	*/
	private Short cCreateSource;
	/**
	* 制单人来源
	*/
	private Short iSubmitSource;
	/**
	* 制单人
	*/
	private Long iSubmiterId;
	/**
	* 确认人
	*/
	private Long iConfirmerId;
	/**
	* 制单时间
	*/
	private String dOrderDate;
	/**
	* 订单生成时间
	*/
	private String dOrderCreateDate;
	/**
	* 订单确认时间
	*/
	private String dConfirmDate;
	/**
	* 订单付款时间
	*/
	private String dPayDate;
	/**
	* 预计发货日期
	*/
    @JsonFormat(pattern = "yyyy-MM-dd")
	private LocalDate dSendDate;
	/**
	* 期望收货日期
	*/
	private String dHopeReceiveDate;
	/**
	* 驳回批注
	*/
	private String cOpposeMemo;
	/**
	* 订单当前状态码
	*/
	private String cStatusCode;
	/**
	* 订单下一状态
	*/
	private String cNextStatus;
	/**
	* 订单下一状态名
	*/
	private String cNextStatusName;
	/**
	* 当前状态位置
	*/
	private Integer iCurrentStatus;
	/**
	* 支付状态
	*/
	private String cPayStatusCode;
	/**
	* 是否发货
	*/
	private Boolean isHaveDelivery;
	/**
	* 库存占用时机
	*/
	private String cOccupyInventory;
	/**
	* 组织ID
	*/
	private Long iSaleOrgId;
	/**
	* 拆单规则
	*/
	private String cSeparatePromotionType;
	/**
	* 运费
	*/
	private BigDecimal fReight;
	/**
	* 积分
	*/
	private BigDecimal fPointsMoney;
	/**
	* 实付金额(含运费)
	*/
	private BigDecimal fPayMoney;
	/**
	* 实付金额(不含运费)
	*/
	private BigDecimal fOrderPayMoney;
	/**
	* 应付金额(含运费)
	*/
	private BigDecimal fRealMoney;
	/**
	* 应付金额(不含运费)
	*/
	private BigDecimal fOrderRealMoney;
	/**
	* 总金额
	*/
	private BigDecimal fTotalMoney;
	/**
	* 返利金额
	*/
	private BigDecimal fRebateMoney;
	/**
	* 抵现金额
	*/
	private BigDecimal fRebateCashMoney;
	/**
	* 特殊优惠
	*/
	private BigDecimal fParticularlyMoney;
	/**
	* 促销
	*/
	private BigDecimal fPromotionMoney;
	/**
	* 未审核的金额
	*/
	private BigDecimal fUnConfirmPrice;
	/**
	* 已支付金额
	*/
	private BigDecimal fConfirmPrice;
	/**
	* 商家id
	*/
	private Long bizId;
	/**
	* 商家名称
	*/
	private String bizName;
	/**
	* 销售组织id
	*/
	private Long salesOrgId;
	/**
	* 销售部门id
	*/
	private Long saleDepartmentId;
	/**
	* 财务组织id
	*/
	private Long settlementOrgId;
	/**
	* 客户交易关系id
	*/
	private Long agentRelationId;
	/**
	* 积分
	*/
	private Integer iPoints;
	/**
	* 优惠券金额
	*/
	private BigDecimal fCouponsMoney;
	/**
	* 打印次数
	*/
	private Integer iPrintCount;
	/**
	* 开票客户id
	*/
	private Long iInvoiceAgentId;
	/**
	* 发票类型
	*/
	private String cInvoiceType;
	/**
	* 发票类型Id
	*/
	private String bdInvoiceTypeId;
	/**
	* 发票类型Code
	*/
	private String bdInvoiceTypeCode;
	/**
	* 订单金额
	*/
	private Long orderPriceId;
	/**
	* 交货日期
	*/
	private String dDeliveryDate;
	/**
	* 接口标识
	*/
	private String cOutSysKey;
	/**
	* 收货地址
	*/
	private ShipToAddressVo oAgentShipToAddress;
	/**
	* 是否附带促销标记
	*/
	private Boolean withPromotionFlag;
	/**
	* 发票类型集合
	*/
	private List<StatusEnumVo> invoicetypes;
	/**
	* 默认发票类型
	*/
	private StatusEnumVo defaultInvoiceType;
	/**
	* 附件
	*/
	private List<OrderAttachmentModelVo> oAttachments;
	/**
	* 账号对象
	*/
	private Bank bank;
	/**
	* 发票金额
	*/
	private BigDecimal iInvoiceMoney;
	/**
	* 开户行
	*/
	private String cBankName;
	/**
	* 支行名称
	*/
	private String cSubBankName;
	/**
	* 开户行编码
	*/
	private String cBankCode;
	/**
	* 开户账号
	*/
	private String cBankAccount;
	/**
	* 开户名
	*/
	private String cUserBankName;
	/**
	* 发票抬头
	*/
	private String cInvoiceTitle;
	/**
	* 发票类型
	*/
	private String cInvoiceTypeName;
	/**
	* 营业地址
	*/
	private String cInvoiceAddress;
	/**
	* 营业电话
	*/
	private String cInvoiceTelephone;
	/**
	* 发票内容
	*/
	private String cInvoiceContent;
	/**
	* 纳税识别号
	*/
	private String cTaxNum;
	/**
	* 注册地址
	*/
	private String cAddress;
	/**
	* 注册电话
	*/
	private String cTelephone;
	/**
	* 客户收货地址ID
	*/
	private Long iReceiveId;
	/**
	* 收货人姓名
	*/
	private String cReceiver;
	/**
	* 收货人电话
	*/
	private String cReceiveMobile;
	/**
	* 收货人固定电话
	*/
	private String cReceiveTelePhone;
	/**
	* 街道
	*/
	private String cReceiveAddress;
	/**
	* 收货人邮箱
	*/
	private String cReceiveZipCode;
	/**
	* erp是否下载
	*/
	private Boolean bDownloadU8;
	/**
	* 是否下载成功
	*/
	private Boolean isDownSuccess;
	/**
	* 下载去向
	*/
	private Short cDownloadSource;
	/**
	* 下载返回消息
	*/
	private String cDownloadMsg;
	/**
	* 下载时间
	*/
	private String cDownloadU8Date;
	/**
	* 上传订单时间戳
	*/
	private String cErpTS;
	/**
	* 提交人
	*/
	private VoucherUserModelVo oSubmiter;
	/**
	* 客户信息
	*/
	private VoucherAgentModelVo oAgent;
	/**
	* 客户信息
	*/
	private AgentInfoVo agentInfoVo;
	/**
	* 自定义项
	*/
	private OrderDefine oOrderDefine;
	/**
	* 状态记录
	*/
	private List<OrderStatusVo> oStatusRecord;
	/**
	* 流程状态记录
	*/
	private List<OrderStatusVo> oOrderStatuses;
	/**
	* 详情
	*/
	private List<OrderDetailModelVo> oOrderDetails;
	/**
	* 是否显示期望收货日期
	*/
	private Boolean isShowHopeReceiveDate;
	/**
	* 期望收货日期是否必填
	*/
	private Boolean isRequiredHopeReceiveDate;
	/**
	* 是否客户提交订单
	*/
	private Boolean isAgentSubmit;
	/**
	* 订单详情分组
	*/
	private List<OrderDetailGroupModelVo> oOrderDetailGroups;
	/**
	* 订单套件
	*/
	private List<OrderDetailGroupSuiteVo> orderDetailGroupSuiteVos;
	/**
	* 凑单提示分组
	*/
	private List<OrderDetailGroupModelVo> addOnGroups;
	/**
	* 订单详情分组
	*/
	private List<OrderBizGroupVo> oOrderBizGroups;
	/**
	* 支付方式
	*/
	private String cOrderPayType;
	/**
	* 支付方式
	*/
	private StatusEnumModelVo oPayWayCode;
	/**
	* 结算类型
	*/
	private String cSettVoucherType;
	/**
	* 交易类型
	*/
	private TransactionTypeModelVo oTransactionType;
	/**
	* 交易类型
	*/
	private Long iTransactionTypeId;
	/**
	* 结算方式
	*/
	private Long iSettlementId;
	/**
	* 结算方式
	*/
	private SettlementWayModelVo oSettlementWay;
	/**
	* 发运方式
	*/
	private String cShippingChoiceCode;
	/**
	* 发运方式
	*/
	private ShippingChoiceModelVo oShippingChoice;
	/**
	* 订单备注
	*/
	private List<VoucherMemoModelVo> oOrderMemos;
	/**
	* 商家外部编码
	*/
	private String cBizOutSysKey;
	/**
	* 商家类型
	*/
	private Short iBizType;
	/**
	* 销售组织名称
	*/
	private String salesOrgName;
	/**
	* 销售部门名称
	*/
	private String saleDepartmentName;
	/**
	* 财务组织名称
	*/
	private String settlementOrgName;
	/**
	* 销售组织外部标识
	*/
	private String cSalesOrgOutSysKey;
	/**
	* 财务组织外部标识
	*/
	private String cSettlementOrgOutSysKey;
	/**
	* 支付状态名称
	*/
	private String cOrderPaymentStatusName;
	/**
	* 结算方式
	*/
	private String cSettlementName;
	/**
	* 拆单类型
	*/
	private String cSplitMoment;
	/**
	* 备注
	*/
	private String cRemark;
	/**
	* 当前订单是否是单商家
	*/
	private Boolean isSingle;
	/**
	* 当前订单是否是单组织
	*/
	private Boolean isOnlyOrg;
	/**
	* 订单联系人
	*/
	private ContacterVo oContactUser;
	/**
	* 已支付金额,审核的金额
	*/
	private BigDecimal paidMoney;
	/**
	* 已支付,未审核的金额
	*/
	private BigDecimal unConfirmMoney;
	/**
	* 汇率类型
	*/
	private String exchangeRateType;
	/**
	* 汇率
	*/
	private BigDecimal exchangeRate;
	/**
	* 使用的返利
	*/
	private List<RebateVo> oRebates;
	/**
	* 分摊返利最大可使用金额
	*/
	private BigDecimal fMaxRebateMoney;
	/**
	* 当前订单最大可用返利   所有满足的返利规则里 取最小
	*/
	private BigDecimal fMaxRebateRuleMoney;
	/**
	* 最低整单金额  所有不满足的返利规则里  取最大
	*/
	private BigDecimal fMiniRebateRuleMoney;
	/**
	* 是否可以使用返利
	*/
	private Boolean isCanUsedRebate;
	/**
	* 剩余返利金额
	*/
	private BigDecimal rebateSurplusMoney;
	/**
	* 还可用的整单返利
	*/
	private BigDecimal surplusMaxRebateMoney;
	/**
	* 还可用的直接抵现
	*/
	private BigDecimal surplusCashMaxRebateMoney;
	/**
	* 本单已用返利
	*/
	private BigDecimal totalRebateMoney;
	/**
	* 订单折扣返利
	*/
	private BigDecimal orderMaxRebateMoney;
	/**
	* 订单抵现返利
	*/
	private BigDecimal orderCashMaxRebateMoney;
	/**
	* 是否显示提示窗
	*/
	private Boolean displayAvailableRebateTips;
	/**
	* 是否是多组织或多商家
	*/
	private Boolean bizs;
	/**
	* 原币pk
	*/
	private String originalPk;
	/**
	* 原币编码
	*/
	private String originalCode;
	/**
	* 原币名称
	*/
	private String originalName;
	/**
	* 本币pk
	*/
	private String domesticPk;
	/**
	* 本币编码
	*/
	private String domesticCode;
	/**
	* 本币名称
	*/
	private String domesticName;
	/**
	* 税目
	*/
	private String taxItems;
	/**
	* 税率
	*/
	private BigDecimal taxRate;
	/**
	* 是否含税
	*/
	private Boolean taxInclusive;
	/**
	* 总金额（原币无税）
	*/
	private BigDecimal totalMoneyOrigTaxfree;
	/**
	* 返利金额（原币无税）
	*/
	private BigDecimal rebateMoneyOrigTaxfree;
	/**
	* 抵现返利金额（原币无税）
	*/
	private BigDecimal rebateCashMoneyOrigTaxfree;
	/**
	* 实付金额（原币无税）
	*/
	private BigDecimal payMoneyOrigTaxfree;
	/**
	* 订单实付金额（原币无税）
	*/
	private BigDecimal orderPayMoneyOrigTaxfree;
	/**
	* 应付金额（原币无税）
	*/
	private BigDecimal realMoneyOrigTaxfree;
	/**
	* 订单应付金额（原币无税）
	*/
	private BigDecimal orderRealMoneyOrigTaxfree;
	/**
	* 运费（原币无税）
	*/
	private BigDecimal reightMoneyOrigTaxfree;
	/**
	* 特殊优惠（原币无税）
	*/
	private BigDecimal particularlyMoneyOrigTaxfree;
	/**
	* 促销（原币无税）
	*/
	private BigDecimal promotionMoneyOrigTaxfree;
	/**
	* 积分（原币无税）
	*/
	private BigDecimal pointsMoneyOrigTaxfree;
	/**
	* 总金额（本币）
	*/
	private BigDecimal totalMoneyDomestic;
	/**
	* 返利金额（本币）
	*/
	private BigDecimal rebateMoneyDomestic;
	/**
	* 抵现返利金额（本币）
	*/
	private BigDecimal rebateCashMoneyDomestic;
	/**
	* 实付金额（本币）
	*/
	private BigDecimal payMoneyDomestic;
	/**
	* 订单实付金额（本币）
	*/
	private BigDecimal orderPayMoneyDomestic;
	/**
	* 应付金额（本币）
	*/
	private BigDecimal realMoneyDomestic;
	/**
	* 订单应付金额（本币）
	*/
	private BigDecimal orderRealMoneyDomestic;
	/**
	* 运费（本币）
	*/
	private BigDecimal reightMoneyDomestic;
	/**
	* 特殊优惠（本币）
	*/
	private BigDecimal particularlyMoneyDomestic;
	/**
	* 促销（本币）
	*/
	private BigDecimal promotionMoneyDomestic;
	/**
	* 积分（本币）
	*/
	private BigDecimal pointsMoneyDomestic;
	/**
	* 总金额（本币无税）
	*/
	private BigDecimal totalMoneyDomesticTaxfree;
	/**
	* 返利金额（本币无税）
	*/
	private BigDecimal rebateMoneyDomesticTaxfree;
	/**
	* 抵现返利金额（本币无税）
	*/
	private BigDecimal rebateCashMoneyDomesticTaxfree;
	/**
	* 实付金额（本币无税）
	*/
	private BigDecimal payMoneyDomesticTaxfree;
	/**
	* 订单实付金额（本币无税）
	*/
	private BigDecimal orderPayMoneyDomesticTaxfree;
	/**
	* 应付金额（本币无税）
	*/
	private BigDecimal realMoneyDomesticTaxfree;
	/**
	* 订单应付金额（本币无税）
	*/
	private BigDecimal orderRealMoneyDomesticTaxfree;
	/**
	* 运费（本币无税）
	*/
	private BigDecimal reightMoneyDomesticTaxfree;
	/**
	* 特殊优惠（本币无税）
	*/
	private BigDecimal particularlyMoneyDomesticTaxfree;
	/**
	* 促销（本币无税）
	*/
	private BigDecimal promotionMoneyDomesticTaxfree;
	/**
	* 积分（本币无税）
	*/
	private BigDecimal pointsMoneyDomesticTaxfree;
	/**
	* 金额对象
	*/
	private OrderPrice orderPrice;
	/**
	* 租户ID
	*/
	private Long iCorpId;
	/**
	* 是否拆单
	*/
	private Boolean isSplitOrder;
	/**
	* 是否客户子账号
	*/
	private Boolean isSecondUser;
	/**
	* 拆单按钮
	*/
	private Boolean isShowSplitBtn;
	/**
	* 是否复制订单
	*/
	private Boolean isCopyOrder;
	/**
	* 子账号提交按钮
	*/
	private Boolean isShowAgentUserSubmitBtn;
	/**
	* 修改按钮
	*/
	private Boolean isShowModifyBtn;
	/**
	* 删除按钮
	*/
	private Boolean isShowDelBtn;
	/**
	* 是否能创建发货单
	*/
	private Boolean isCreateDelivery;
	/**
	* 是否显示发货按钮
	*/
	private Boolean isShowDeliveryBtn;
	/**
	* 发货按钮
	*/
	private Boolean isShowCreateDeliveryBtn;
	/**
	* 评价按钮
	*/
	private Boolean isShowCommentBtn;
	/**
	* 是否存在评价
	*/
	private Boolean isExistComment;
	/**
	* 订单确认
	*/
	private Boolean isShowConfirmBtn;
	/**
	* 订单驳回
	*/
	private Boolean isShowOpposeBtn;
	/**
	* 行关闭按钮
	*/
	private Boolean isShowClosedDetail;
	/**
	* 行打开
	*/
	private Boolean isShowOpenDetail;
	/**
	* 订单解锁按钮
	*/
	private Boolean isShowOrderUnlockBtn;
	/**
	* 支付按钮
	*/
	private Boolean isShowPayBtn;
	/**
	* 收货确认按钮
	*/
	private Boolean isShowTakeDeliveryBtn;
	/**
	* 是否有备注
	*/
	private Boolean isHaveMemo;
	/**
	* 允许编辑支付方式
	*/
	private Boolean isEditPayWay;
	/**
	* 允许编辑收货地址
	*/
	private Boolean isEditReceiveAddress;
	/**
	* 允许编辑发票信息
	*/
	private Boolean isEditInvoice;
	/**
	* 完成发货
	*/
	private Boolean isFinishDelivery;
	/**
	* 是否显示退货按钮
	*/
	private Boolean isShowSaleReturnBtn;
	/**
	* 订单回退按钮
	*/
	private Boolean isShowOrderRollBack;
	/**
	* 是否存在支付单
	*/
	private String cExistPay;
	/**
	* 优惠券
	*/
	private List<OrderCoupons> orderCoupons;
	/**
	* 是否完成组织赋值
	*/
	private Boolean isFinishPackageOrderOrgInfo;
	/**
	* 零售门店ID
	*/
	private Long receiveStore;
	/**
	* 发票id
	*/
	private Long invoiceId;
	/**
	* 发票抬头类型
	*/
	private Short invoiceTitleType;
	/**
	* 发票抬头类型
	*/
	private String invoiceTitleTypeName;
	/**
	* 默认发票类型
	*/
	private Map defaultInvoiceTypeMap;
	/**
	* 支付方式
	*/
	private Map payWayCodeMap;
	/**
	* 原币实体
	*/
	private CurrencyVo originalCurrencyVo;
	/**
	* 本币实体
	*/
	private CurrencyVo domesticCurrencyVo;
	/**
	* 是否完成币种组装
	*/
	private Boolean isFinishPackageOrderCurrency;
	/**
	* 是否实时计算促销
	*/
	private Boolean isCalcPromotionBtn;
	/**
	* 是否完成商品组装
	*/
	private Boolean isFinishPackageProductInfo;
	/**
	* 是否使用优惠券
	*/
	private Boolean showCoupons;
	/**
	* 是否使用积分
	*/
	private Boolean showPoint;
	/**
	* markupDeails
	*/
	private List<OrderDetailModelVo> markupDeails;
	/**
	* 提交后是否可修改
	*/
	private boolean submitEditing;
	/**
	* bClearGiveaway
	*/
	private boolean bClearGiveaway;
	/**
	* fRebateDiscountMoney
	*/
	private BigDecimal rebateDiscountMoney;
	/**
	* fRebateReturnProductMoney
	*/
	private BigDecimal rebateReturnProductMoney;
	/**
	* 促销的类型
	*/
	private String promotionType;
	/**
	* 
	*/
	private Boolean isNeedCalcPromotion;
	/**
	* 是否校验价盘
	*/
	private Boolean isVerify;
	/**
	* 时间戳
	*/
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	private LocalDateTime pubuts;
	/**
	* 浮动（计价）
	*/
	private Integer unitExchangeTypePrice;
	/**
	* 浮动（销售）
	*/
	private Integer unitExchangeType;
	/**
	* 是否只修改了手工赠品
	*/
	private Boolean isOnlyEditUserAddGiveaway;
	/**
	* 是否需要更显促销使用记录
	*/
	private Boolean needUpdatePreferentialNum;
	/**
	* 促销计算版本
	*/
	private String promotionVoucherVersion;
	/**
	* 是否自动使用返利
	*/
	private Boolean isAutoUseRebate;
	/**
	* 定价不可或缺维度
	*/
	private List<String> indispensablyPricingDimension;
	/**
	* 是否自动使用返利
	*/
	private Boolean rebateFlag;
	/**
	* 店铺id
	*/
	private Long receiveStoreId;
	/**
	* 店铺名称
	*/
	private String receiveStoreName;
	/**
	* 店铺code
	*/
	private String receiveStoreCode;
	/**
	* 促销模型
	*/
	private Voucher voucher;
	/**
	* 下架商品详情列表
	*/
	private List<OrderDetailVo> downProductOrderDetailList;
	/**
	* 来源单据id
	*/
	private Long srcBillId;
	/**
	* 来源单据类型
	*/
	private String sourceType;
	/**
	* 来源单据编号
	*/
	private String srcBillNO;
	/**
	* 销售合同名称
	*/
	private String srcBillName;
	/**
	* 收款协议id
	*/
	private Long receiveAgreementId;
	/**
	* 
	*/
	private Boolean isFlowCoreBill;
	/**
	* 流程ID
	*/
	private String bizFlow;
	/**
	* 流程名称
	*/
	private String bizFlow_name;
	/**
	* 流程版本
	*/
	private String bizFlow_version;
	/**
	* 销售合同类型
	*/
	private Short contractCtrlType;
	/**
	* 
	*/
	private Short isContractVerify;
	/**
	* 来源单据类型
	*/
	private Short srcbillType;
	/**
	* 仓库名称
	*/
	private String stockName;
	/**
	* 允许门户端改价
	*/
	private Boolean allowModifyPrice;
	/**
	* 我方采购单号
	*/
	private String purchaseNo;
	

    @JsonProperty("id")
	public Long getId() {
		return this.id;
	}
    @JsonProperty("id")
	public void setId(Long id) {
		this.id = id;
	}

    @JsonProperty("cOrderNo")
	public String getOrderNo() {
		return this.cOrderNo;
	}
    @JsonProperty("cOrderNo")
	public void setOrderNo(String cOrderNo) {
		this.cOrderNo = cOrderNo;
	}

    @JsonProperty("presaleId")
	public Long getPresaleId() {
		return this.presaleId;
	}
    @JsonProperty("presaleId")
	public void setPresaleId(Long presaleId) {
		this.presaleId = presaleId;
	}

    @JsonProperty("cParentOrderNo")
	public String getParentOrderNo() {
		return this.cParentOrderNo;
	}
    @JsonProperty("cParentOrderNo")
	public void setParentOrderNo(String cParentOrderNo) {
		this.cParentOrderNo = cParentOrderNo;
	}

    @JsonProperty("iAgentId")
	public Long getAgentId() {
		return this.iAgentId;
	}
    @JsonProperty("iAgentId")
	public void setAgentId(Long iAgentId) {
		this.iAgentId = iAgentId;
	}

    @JsonProperty("iCorpContactId")
	public Long getCorpContactId() {
		return this.iCorpContactId;
	}
    @JsonProperty("iCorpContactId")
	public void setCorpContactId(Long iCorpContactId) {
		this.iCorpContactId = iCorpContactId;
	}

    @JsonProperty("cCorpContactUserName")
	public String getCorpContactUserName() {
		return this.cCorpContactUserName;
	}
    @JsonProperty("cCorpContactUserName")
	public void setCorpContactUserName(String cCorpContactUserName) {
		this.cCorpContactUserName = cCorpContactUserName;
	}

    @JsonProperty("cCorpContactUserErpCode")
	public String getCorpContactUserErpCode() {
		return this.cCorpContactUserErpCode;
	}
    @JsonProperty("cCorpContactUserErpCode")
	public void setCorpContactUserErpCode(String cCorpContactUserErpCode) {
		this.cCorpContactUserErpCode = cCorpContactUserErpCode;
	}

    @JsonProperty("cReceiveContacter")
	public String getReceiveContacter() {
		return this.cReceiveContacter;
	}
    @JsonProperty("cReceiveContacter")
	public void setReceiveContacter(String cReceiveContacter) {
		this.cReceiveContacter = cReceiveContacter;
	}

    @JsonProperty("cReceiveContacterPhone")
	public String getReceiveContacterPhone() {
		return this.cReceiveContacterPhone;
	}
    @JsonProperty("cReceiveContacterPhone")
	public void setReceiveContacterPhone(String cReceiveContacterPhone) {
		this.cReceiveContacterPhone = cReceiveContacterPhone;
	}

    @JsonProperty("bLockIn")
	public Boolean getLockIn() {
		return this.bLockIn;
	}
    @JsonProperty("bLockIn")
	public void setLockIn(Boolean bLockIn) {
		this.bLockIn = bLockIn;
	}

    @JsonProperty("cSource")
	public OrderRequestTypeEnum getSource() {
        if(this.cSource == null){
			return null;
		}
		return OrderRequestTypeEnum.find(this.cSource.intValue());
	}
	@JsonSetter
    @JsonProperty("cSource")
	public void setSource(OrderRequestTypeEnum cSource) {
		Assert.notNull(cSource, "OrderModelVo.cSource:enum[OrderRequestTypeEnum] value must not be null!");
		this.cSource = cSource.getValue();
	}
	
	public void setSource(Short cSource) {
		Assert.notNull(cSource, "OrderModelVo.cSource:enum[OrderRequestTypeEnum] value must not be null!");
		Assert.notNull(OrderRequestTypeEnum.find(cSource.intValue()),String.format("OrderModelVo.cSource:enum[OrderRequestTypeEnum] value:%s is invalid value!",cSource)); 
		this.cSource = cSource;
	}
    @JsonProperty("cCreateSource")
	public ApiSource getCreateSource() {
        if(this.cCreateSource == null){
			return null;
		}
		return ApiSource.find(this.cCreateSource.intValue());
	}
	@JsonSetter
    @JsonProperty("cCreateSource")
	public void setCreateSource(ApiSource cCreateSource) {
		Assert.notNull(cCreateSource, "OrderModelVo.cCreateSource:enum[ApiSource] value must not be null!");
		this.cCreateSource = cCreateSource.getValue();
	}
	
	public void setCreateSource(Short cCreateSource) {
		Assert.notNull(cCreateSource, "OrderModelVo.cCreateSource:enum[ApiSource] value must not be null!");
		Assert.notNull(ApiSource.find(cCreateSource.intValue()),String.format("OrderModelVo.cCreateSource:enum[ApiSource] value:%s is invalid value!",cCreateSource)); 
		this.cCreateSource = cCreateSource;
	}
    @JsonProperty("iSubmitSource")
	public UserType getSubmitSource() {
        if(this.iSubmitSource == null){
			return null;
		}
		return UserType.find(this.iSubmitSource.intValue());
	}
	@JsonSetter
    @JsonProperty("iSubmitSource")
	public void setSubmitSource(UserType iSubmitSource) {
		Assert.notNull(iSubmitSource, "OrderModelVo.iSubmitSource:enum[UserType] value must not be null!");
		this.iSubmitSource = iSubmitSource.getValue();
	}
	
	public void setSubmitSource(Short iSubmitSource) {
		Assert.notNull(iSubmitSource, "OrderModelVo.iSubmitSource:enum[UserType] value must not be null!");
		Assert.notNull(UserType.find(iSubmitSource.intValue()),String.format("OrderModelVo.iSubmitSource:enum[UserType] value:%s is invalid value!",iSubmitSource)); 
		this.iSubmitSource = iSubmitSource;
	}
    @JsonProperty("iSubmiterId")
	public Long getSubmiterId() {
		return this.iSubmiterId;
	}
    @JsonProperty("iSubmiterId")
	public void setSubmiterId(Long iSubmiterId) {
		this.iSubmiterId = iSubmiterId;
	}

    @JsonProperty("iConfirmerId")
	public Long getConfirmerId() {
		return this.iConfirmerId;
	}
    @JsonProperty("iConfirmerId")
	public void setConfirmerId(Long iConfirmerId) {
		this.iConfirmerId = iConfirmerId;
	}

    @JsonProperty("dOrderDate")
	public String getOrderDate() {
		return this.dOrderDate;
	}
    @JsonProperty("dOrderDate")
	public void setOrderDate(String dOrderDate) {
		this.dOrderDate = dOrderDate;
	}

    @JsonProperty("dOrderCreateDate")
	public String getOrderCreateDate() {
		return this.dOrderCreateDate;
	}
    @JsonProperty("dOrderCreateDate")
	public void setOrderCreateDate(String dOrderCreateDate) {
		this.dOrderCreateDate = dOrderCreateDate;
	}

    @JsonProperty("dConfirmDate")
	public String getConfirmDate() {
		return this.dConfirmDate;
	}
    @JsonProperty("dConfirmDate")
	public void setConfirmDate(String dConfirmDate) {
		this.dConfirmDate = dConfirmDate;
	}

    @JsonProperty("dPayDate")
	public String getPayDate() {
		return this.dPayDate;
	}
    @JsonProperty("dPayDate")
	public void setPayDate(String dPayDate) {
		this.dPayDate = dPayDate;
	}

    @JsonProperty("dSendDate")
	public LocalDate getSendDate() {
		return this.dSendDate;
	}
    @JsonProperty("dSendDate")
	public void setSendDate(LocalDate dSendDate) {
		this.dSendDate = dSendDate;
	}

    @JsonProperty("dHopeReceiveDate")
	public String getHopeReceiveDate() {
		return this.dHopeReceiveDate;
	}
    @JsonProperty("dHopeReceiveDate")
	public void setHopeReceiveDate(String dHopeReceiveDate) {
		this.dHopeReceiveDate = dHopeReceiveDate;
	}

    @JsonProperty("cOpposeMemo")
	public String getOpposeMemo() {
		return this.cOpposeMemo;
	}
    @JsonProperty("cOpposeMemo")
	public void setOpposeMemo(String cOpposeMemo) {
		this.cOpposeMemo = cOpposeMemo;
	}

	public OrderStatusEnum getStatusCode() {
        if(this.cStatusCode == null){
			return null;
		}
		return OrderStatusEnum.find(this.cStatusCode);
	}
	
	@JsonSetter
    @JsonProperty("cStatusCode")
	public void setStatusCode(OrderStatusEnum cStatusCode) {
		Assert.notNull(cStatusCode, "OrderModelVo.cStatusCode:enum[OrderStatusEnum] value must not be null!");
		this.cStatusCode = cStatusCode.getName();
	}
	
	public void setStatusCode(String cStatusCode) {
		Assert.notNull(cStatusCode, "OrderModelVo.cStatusCode:enum[OrderStatusEnum] value must not be null!");
		Assert.notNull(OrderStatusEnum.find(cStatusCode),String.format("OrderModelVo.cStatusCode:enum[OrderStatusEnum] value:%s is invalid value!",cStatusCode)); 
		this.cStatusCode = cStatusCode;
	}
	public OrderStatusEnum getNextStatus() {
        if(this.cNextStatus == null){
			return null;
		}
		return OrderStatusEnum.find(this.cNextStatus);
	}
	
	@JsonSetter
    @JsonProperty("cNextStatus")
	public void setNextStatus(OrderStatusEnum cNextStatus) {
		Assert.notNull(cNextStatus, "OrderModelVo.cNextStatus:enum[OrderStatusEnum] value must not be null!");
		this.cNextStatus = cNextStatus.getName();
	}
	
	public void setNextStatus(String cNextStatus) {
		Assert.notNull(cNextStatus, "OrderModelVo.cNextStatus:enum[OrderStatusEnum] value must not be null!");
		Assert.notNull(OrderStatusEnum.find(cNextStatus),String.format("OrderModelVo.cNextStatus:enum[OrderStatusEnum] value:%s is invalid value!",cNextStatus)); 
		this.cNextStatus = cNextStatus;
	}
    @JsonProperty("cNextStatusName")
	public String getNextStatusName() {
		return this.cNextStatusName;
	}
    @JsonProperty("cNextStatusName")
	public void setNextStatusName(String cNextStatusName) {
		this.cNextStatusName = cNextStatusName;
	}

    @JsonProperty("iCurrentStatus")
	public Integer getCurrentStatus() {
		if(this.iCurrentStatus == null){
			return 0;
        }
		return this.iCurrentStatus;
	}
    @JsonProperty("iCurrentStatus")
	public void setCurrentStatus(Integer iCurrentStatus) {
		this.iCurrentStatus = iCurrentStatus;
	}

	public VoucherPaymentStatusEnum getPayStatusCode() {
        if(this.cPayStatusCode == null){
			return null;
		}
		return VoucherPaymentStatusEnum.find(this.cPayStatusCode);
	}
	
	@JsonSetter
    @JsonProperty("cPayStatusCode")
	public void setPayStatusCode(VoucherPaymentStatusEnum cPayStatusCode) {
		Assert.notNull(cPayStatusCode, "OrderModelVo.cPayStatusCode:enum[VoucherPaymentStatusEnum] value must not be null!");
		this.cPayStatusCode = cPayStatusCode.getName();
	}
	
	public void setPayStatusCode(String cPayStatusCode) {
		Assert.notNull(cPayStatusCode, "OrderModelVo.cPayStatusCode:enum[VoucherPaymentStatusEnum] value must not be null!");
		Assert.notNull(VoucherPaymentStatusEnum.find(cPayStatusCode),String.format("OrderModelVo.cPayStatusCode:enum[VoucherPaymentStatusEnum] value:%s is invalid value!",cPayStatusCode)); 
		this.cPayStatusCode = cPayStatusCode;
	}
    @JsonProperty("isHaveDelivery")
	public Boolean getIsHaveDelivery() {
		if(this.isHaveDelivery == null){
			return true;
        }
		return this.isHaveDelivery;
	}
    @JsonProperty("isHaveDelivery")
	public void setIsHaveDelivery(Boolean isHaveDelivery) {
		this.isHaveDelivery = isHaveDelivery;
	}

	public OrderOccupyInventoryEnum getOccupyInventory() {
        if(this.cOccupyInventory == null){
			return null;
		}
		return OrderOccupyInventoryEnum.find(this.cOccupyInventory);
	}
	
	@JsonSetter
    @JsonProperty("cOccupyInventory")
	public void setOccupyInventory(OrderOccupyInventoryEnum cOccupyInventory) {
		Assert.notNull(cOccupyInventory, "OrderModelVo.cOccupyInventory:enum[OrderOccupyInventoryEnum] value must not be null!");
		this.cOccupyInventory = cOccupyInventory.getName();
	}
	
	public void setOccupyInventory(String cOccupyInventory) {
		Assert.notNull(cOccupyInventory, "OrderModelVo.cOccupyInventory:enum[OrderOccupyInventoryEnum] value must not be null!");
		Assert.notNull(OrderOccupyInventoryEnum.find(cOccupyInventory),String.format("OrderModelVo.cOccupyInventory:enum[OrderOccupyInventoryEnum] value:%s is invalid value!",cOccupyInventory)); 
		this.cOccupyInventory = cOccupyInventory;
	}
    @JsonProperty("iSaleOrgId")
	public Long getSaleOrgId() {
		return this.iSaleOrgId;
	}
    @JsonProperty("iSaleOrgId")
	public void setSaleOrgId(Long iSaleOrgId) {
		this.iSaleOrgId = iSaleOrgId;
	}

    @JsonProperty("cSeparatePromotionType")
	public String getSeparatePromotionType() {
		return this.cSeparatePromotionType;
	}
    @JsonProperty("cSeparatePromotionType")
	public void setSeparatePromotionType(String cSeparatePromotionType) {
		this.cSeparatePromotionType = cSeparatePromotionType;
	}

    @JsonProperty("fReight")
	public BigDecimal getReight() {
		if(this.fReight == null){
			return BigDecimal.ZERO;
        }
		return this.fReight;
	}
    @JsonProperty("fReight")
	public void setReight(BigDecimal fReight) {
		this.fReight = fReight;
	}

    @JsonProperty("fPointsMoney")
	public BigDecimal getPointsMoney() {
		if(this.fPointsMoney == null){
			return BigDecimal.ZERO;
        }
		return this.fPointsMoney;
	}
    @JsonProperty("fPointsMoney")
	public void setPointsMoney(BigDecimal fPointsMoney) {
		this.fPointsMoney = fPointsMoney;
	}

    @JsonProperty("fPayMoney")
	public BigDecimal getPayMoney() {
		if(this.fPayMoney == null){
			return BigDecimal.ZERO;
        }
		return this.fPayMoney;
	}
    @JsonProperty("fPayMoney")
	public void setPayMoney(BigDecimal fPayMoney) {
		this.fPayMoney = fPayMoney;
	}

    @JsonProperty("fOrderPayMoney")
	public BigDecimal getOrderPayMoney() {
		if(this.fOrderPayMoney == null){
			return BigDecimal.ZERO;
        }
		return this.fOrderPayMoney;
	}
    @JsonProperty("fOrderPayMoney")
	public void setOrderPayMoney(BigDecimal fOrderPayMoney) {
		this.fOrderPayMoney = fOrderPayMoney;
	}

    @JsonProperty("fRealMoney")
	public BigDecimal getRealMoney() {
		if(this.fRealMoney == null){
			return BigDecimal.ZERO;
        }
		return this.fRealMoney;
	}
    @JsonProperty("fRealMoney")
	public void setRealMoney(BigDecimal fRealMoney) {
		this.fRealMoney = fRealMoney;
	}

    @JsonProperty("fOrderRealMoney")
	public BigDecimal getOrderRealMoney() {
		if(this.fOrderRealMoney == null){
			return BigDecimal.ZERO;
        }
		return this.fOrderRealMoney;
	}
    @JsonProperty("fOrderRealMoney")
	public void setOrderRealMoney(BigDecimal fOrderRealMoney) {
		this.fOrderRealMoney = fOrderRealMoney;
	}

    @JsonProperty("fTotalMoney")
	public BigDecimal getTotalMoney() {
		if(this.fTotalMoney == null){
			return BigDecimal.ZERO;
        }
		return this.fTotalMoney;
	}
    @JsonProperty("fTotalMoney")
	public void setTotalMoney(BigDecimal fTotalMoney) {
		this.fTotalMoney = fTotalMoney;
	}

    @JsonProperty("fRebateMoney")
	public BigDecimal getRebateMoney() {
		if(this.fRebateMoney == null){
			return BigDecimal.ZERO;
        }
		return this.fRebateMoney;
	}
    @JsonProperty("fRebateMoney")
	public void setRebateMoney(BigDecimal fRebateMoney) {
		this.fRebateMoney = fRebateMoney;
	}

    @JsonProperty("fRebateCashMoney")
	public BigDecimal getRebateCashMoney() {
		if(this.fRebateCashMoney == null){
			return BigDecimal.ZERO;
        }
		return this.fRebateCashMoney;
	}
    @JsonProperty("fRebateCashMoney")
	public void setRebateCashMoney(BigDecimal fRebateCashMoney) {
		this.fRebateCashMoney = fRebateCashMoney;
	}

    @JsonProperty("fParticularlyMoney")
	public BigDecimal getParticularlyMoney() {
		if(this.fParticularlyMoney == null){
			return BigDecimal.ZERO;
        }
		return this.fParticularlyMoney;
	}
    @JsonProperty("fParticularlyMoney")
	public void setParticularlyMoney(BigDecimal fParticularlyMoney) {
		this.fParticularlyMoney = fParticularlyMoney;
	}

    @JsonProperty("fPromotionMoney")
	public BigDecimal getPromotionMoney() {
		if(this.fPromotionMoney == null){
			return BigDecimal.ZERO;
        }
		return this.fPromotionMoney;
	}
    @JsonProperty("fPromotionMoney")
	public void setPromotionMoney(BigDecimal fPromotionMoney) {
		this.fPromotionMoney = fPromotionMoney;
	}

    @JsonProperty("fUnConfirmPrice")
	public BigDecimal getUnConfirmPrice() {
		if(this.fUnConfirmPrice == null){
			return BigDecimal.ZERO;
        }
		return this.fUnConfirmPrice;
	}
    @JsonProperty("fUnConfirmPrice")
	public void setUnConfirmPrice(BigDecimal fUnConfirmPrice) {
		this.fUnConfirmPrice = fUnConfirmPrice;
	}

    @JsonProperty("fConfirmPrice")
	public BigDecimal getConfirmPrice() {
		if(this.fConfirmPrice == null){
			return BigDecimal.ZERO;
        }
		return this.fConfirmPrice;
	}
    @JsonProperty("fConfirmPrice")
	public void setConfirmPrice(BigDecimal fConfirmPrice) {
		this.fConfirmPrice = fConfirmPrice;
	}

    @JsonProperty("bizId")
	public Long getBizId() {
		return this.bizId;
	}
    @JsonProperty("bizId")
	public void setBizId(Long bizId) {
		this.bizId = bizId;
	}

    @JsonProperty("bizName")
	public String getBizName() {
		return this.bizName;
	}
    @JsonProperty("bizName")
	public void setBizName(String bizName) {
		this.bizName = bizName;
	}

    @JsonProperty("salesOrgId")
	public Long getSalesOrgId() {
		return this.salesOrgId;
	}
    @JsonProperty("salesOrgId")
	public void setSalesOrgId(Long salesOrgId) {
		this.salesOrgId = salesOrgId;
	}

    @JsonProperty("saleDepartmentId")
	public Long getSaleDepartmentId() {
		return this.saleDepartmentId;
	}
    @JsonProperty("saleDepartmentId")
	public void setSaleDepartmentId(Long saleDepartmentId) {
		this.saleDepartmentId = saleDepartmentId;
	}

    @JsonProperty("settlementOrgId")
	public Long getSettlementOrgId() {
		return this.settlementOrgId;
	}
    @JsonProperty("settlementOrgId")
	public void setSettlementOrgId(Long settlementOrgId) {
		this.settlementOrgId = settlementOrgId;
	}

    @JsonProperty("agentRelationId")
	public Long getAgentRelationId() {
		return this.agentRelationId;
	}
    @JsonProperty("agentRelationId")
	public void setAgentRelationId(Long agentRelationId) {
		this.agentRelationId = agentRelationId;
	}

    @JsonProperty("iPoints")
	public Integer getPoints() {
		return this.iPoints;
	}
    @JsonProperty("iPoints")
	public void setPoints(Integer iPoints) {
		this.iPoints = iPoints;
	}

    @JsonProperty("fCouponsMoney")
	public BigDecimal getCouponsMoney() {
		if(this.fCouponsMoney == null){
			return BigDecimal.ZERO;
        }
		return this.fCouponsMoney;
	}
    @JsonProperty("fCouponsMoney")
	public void setCouponsMoney(BigDecimal fCouponsMoney) {
		this.fCouponsMoney = fCouponsMoney;
	}

    @JsonProperty("iPrintCount")
	public Integer getPrintCount() {
		return this.iPrintCount;
	}
    @JsonProperty("iPrintCount")
	public void setPrintCount(Integer iPrintCount) {
		this.iPrintCount = iPrintCount;
	}

    @JsonProperty("iInvoiceAgentId")
	public Long getInvoiceAgentId() {
		return this.iInvoiceAgentId;
	}
    @JsonProperty("iInvoiceAgentId")
	public void setInvoiceAgentId(Long iInvoiceAgentId) {
		this.iInvoiceAgentId = iInvoiceAgentId;
	}

    @JsonProperty("cInvoiceType")
	public String getInvoiceType() {
		return this.cInvoiceType;
	}
    @JsonProperty("cInvoiceType")
	public void setInvoiceType(String cInvoiceType) {
		this.cInvoiceType = cInvoiceType;
	}

    @JsonProperty("bdInvoiceTypeId")
	public String getBdInvoiceTypeId() {
		return this.bdInvoiceTypeId;
	}
    @JsonProperty("bdInvoiceTypeId")
	public void setBdInvoiceTypeId(String bdInvoiceTypeId) {
		this.bdInvoiceTypeId = bdInvoiceTypeId;
	}

    @JsonProperty("bdInvoiceTypeCode")
	public String getBdInvoiceTypeCode() {
		return this.bdInvoiceTypeCode;
	}
    @JsonProperty("bdInvoiceTypeCode")
	public void setBdInvoiceTypeCode(String bdInvoiceTypeCode) {
		this.bdInvoiceTypeCode = bdInvoiceTypeCode;
	}

    @JsonProperty("orderPriceId")
	public Long getOrderPriceId() {
		return this.orderPriceId;
	}
    @JsonProperty("orderPriceId")
	public void setOrderPriceId(Long orderPriceId) {
		this.orderPriceId = orderPriceId;
	}

    @JsonProperty("dDeliveryDate")
	public String getDeliveryDate() {
		return this.dDeliveryDate;
	}
    @JsonProperty("dDeliveryDate")
	public void setDeliveryDate(String dDeliveryDate) {
		this.dDeliveryDate = dDeliveryDate;
	}

    @JsonProperty("cOutSysKey")
	public String getOutSysKey() {
		return this.cOutSysKey;
	}
    @JsonProperty("cOutSysKey")
	public void setOutSysKey(String cOutSysKey) {
		this.cOutSysKey = cOutSysKey;
	}

    @JsonProperty("oAgentShipToAddress")
	public ShipToAddressVo getAgentShipToAddress() {
		return this.oAgentShipToAddress;
	}
    @JsonProperty("oAgentShipToAddress")
	public void setAgentShipToAddress(ShipToAddressVo oAgentShipToAddress) {
		this.oAgentShipToAddress = oAgentShipToAddress;
	}

    @JsonProperty("withPromotionFlag")
	public Boolean getWithPromotionFlag() {
		if(this.withPromotionFlag == null){
			return false;
        }
		return this.withPromotionFlag;
	}
    @JsonProperty("withPromotionFlag")
	public void setWithPromotionFlag(Boolean withPromotionFlag) {
		this.withPromotionFlag = withPromotionFlag;
	}

	@JsonProperty("invoicetypes")
	public List<StatusEnumVo> getInvoicetypes() {
		return this.invoicetypes;
	}
	
	@JsonProperty("invoicetypes")
	public void setInvoicetypes(List<StatusEnumVo> invoicetypes) {
		this.invoicetypes = invoicetypes;
	}
    @JsonProperty("defaultInvoiceType")
	public StatusEnumVo getDefaultInvoiceType() {
		return this.defaultInvoiceType;
	}
    @JsonProperty("defaultInvoiceType")
	public void setDefaultInvoiceType(StatusEnumVo defaultInvoiceType) {
		this.defaultInvoiceType = defaultInvoiceType;
	}

	@JsonProperty("oAttachments")
	public List<OrderAttachmentModelVo> getAttachments() {
		return this.oAttachments;
	}
	
	@JsonProperty("oAttachments")
	public void setAttachments(List<OrderAttachmentModelVo> oAttachments) {
		this.oAttachments = oAttachments;
	}
    @JsonProperty("bank")
	public Bank getBank() {
		return this.bank;
	}
    @JsonProperty("bank")
	public void setBank(Bank bank) {
		this.bank = bank;
	}

    @JsonProperty("iInvoiceMoney")
	public BigDecimal getInvoiceMoney() {
		return this.iInvoiceMoney;
	}
    @JsonProperty("iInvoiceMoney")
	public void setInvoiceMoney(BigDecimal iInvoiceMoney) {
		this.iInvoiceMoney = iInvoiceMoney;
	}

    @JsonProperty("cBankName")
	public String getBankName() {
		return this.cBankName;
	}
    @JsonProperty("cBankName")
	public void setBankName(String cBankName) {
		this.cBankName = cBankName;
	}

    @JsonProperty("cSubBankName")
	public String getSubBankName() {
		return this.cSubBankName;
	}
    @JsonProperty("cSubBankName")
	public void setSubBankName(String cSubBankName) {
		this.cSubBankName = cSubBankName;
	}

    @JsonProperty("cBankCode")
	public String getBankCode() {
		return this.cBankCode;
	}
    @JsonProperty("cBankCode")
	public void setBankCode(String cBankCode) {
		this.cBankCode = cBankCode;
	}

    @JsonProperty("cBankAccount")
	public String getBankAccount() {
		return this.cBankAccount;
	}
    @JsonProperty("cBankAccount")
	public void setBankAccount(String cBankAccount) {
		this.cBankAccount = cBankAccount;
	}

    @JsonProperty("cUserBankName")
	public String getUserBankName() {
		return this.cUserBankName;
	}
    @JsonProperty("cUserBankName")
	public void setUserBankName(String cUserBankName) {
		this.cUserBankName = cUserBankName;
	}

    @JsonProperty("cInvoiceTitle")
	public String getInvoiceTitle() {
		return this.cInvoiceTitle;
	}
    @JsonProperty("cInvoiceTitle")
	public void setInvoiceTitle(String cInvoiceTitle) {
		this.cInvoiceTitle = cInvoiceTitle;
	}

    @JsonProperty("cInvoiceTypeName")
	public String getInvoiceTypeName() {
		return this.cInvoiceTypeName;
	}
    @JsonProperty("cInvoiceTypeName")
	public void setInvoiceTypeName(String cInvoiceTypeName) {
		this.cInvoiceTypeName = cInvoiceTypeName;
	}

    @JsonProperty("cInvoiceAddress")
	public String getInvoiceAddress() {
		return this.cInvoiceAddress;
	}
    @JsonProperty("cInvoiceAddress")
	public void setInvoiceAddress(String cInvoiceAddress) {
		this.cInvoiceAddress = cInvoiceAddress;
	}

    @JsonProperty("cInvoiceTelephone")
	public String getInvoiceTelephone() {
		return this.cInvoiceTelephone;
	}
    @JsonProperty("cInvoiceTelephone")
	public void setInvoiceTelephone(String cInvoiceTelephone) {
		this.cInvoiceTelephone = cInvoiceTelephone;
	}

    @JsonProperty("cInvoiceContent")
	public String getInvoiceContent() {
		return this.cInvoiceContent;
	}
    @JsonProperty("cInvoiceContent")
	public void setInvoiceContent(String cInvoiceContent) {
		this.cInvoiceContent = cInvoiceContent;
	}

    @JsonProperty("cTaxNum")
	public String getTaxNum() {
		return this.cTaxNum;
	}
    @JsonProperty("cTaxNum")
	public void setTaxNum(String cTaxNum) {
		this.cTaxNum = cTaxNum;
	}

    @JsonProperty("cAddress")
	public String getAddress() {
		return this.cAddress;
	}
    @JsonProperty("cAddress")
	public void setAddress(String cAddress) {
		this.cAddress = cAddress;
	}

    @JsonProperty("cTelephone")
	public String getTelephone() {
		return this.cTelephone;
	}
    @JsonProperty("cTelephone")
	public void setTelephone(String cTelephone) {
		this.cTelephone = cTelephone;
	}

    @JsonProperty("iReceiveId")
	public Long getReceiveId() {
		return this.iReceiveId;
	}
    @JsonProperty("iReceiveId")
	public void setReceiveId(Long iReceiveId) {
		this.iReceiveId = iReceiveId;
	}

    @JsonProperty("cReceiver")
	public String getReceiver() {
		return this.cReceiver;
	}
    @JsonProperty("cReceiver")
	public void setReceiver(String cReceiver) {
		this.cReceiver = cReceiver;
	}

    @JsonProperty("cReceiveMobile")
	public String getReceiveMobile() {
		return this.cReceiveMobile;
	}
    @JsonProperty("cReceiveMobile")
	public void setReceiveMobile(String cReceiveMobile) {
		this.cReceiveMobile = cReceiveMobile;
	}

    @JsonProperty("cReceiveTelePhone")
	public String getReceiveTelePhone() {
		return this.cReceiveTelePhone;
	}
    @JsonProperty("cReceiveTelePhone")
	public void setReceiveTelePhone(String cReceiveTelePhone) {
		this.cReceiveTelePhone = cReceiveTelePhone;
	}

    @JsonProperty("cReceiveAddress")
	public String getReceiveAddress() {
		return this.cReceiveAddress;
	}
    @JsonProperty("cReceiveAddress")
	public void setReceiveAddress(String cReceiveAddress) {
		this.cReceiveAddress = cReceiveAddress;
	}

    @JsonProperty("cReceiveZipCode")
	public String getReceiveZipCode() {
		return this.cReceiveZipCode;
	}
    @JsonProperty("cReceiveZipCode")
	public void setReceiveZipCode(String cReceiveZipCode) {
		this.cReceiveZipCode = cReceiveZipCode;
	}

    @JsonProperty("bDownloadU8")
	public Boolean getDownloadU8() {
		return this.bDownloadU8;
	}
    @JsonProperty("bDownloadU8")
	public void setDownloadU8(Boolean bDownloadU8) {
		this.bDownloadU8 = bDownloadU8;
	}

    @JsonProperty("isDownSuccess")
	public Boolean getIsDownSuccess() {
		return this.isDownSuccess;
	}
    @JsonProperty("isDownSuccess")
	public void setIsDownSuccess(Boolean isDownSuccess) {
		this.isDownSuccess = isDownSuccess;
	}

    @JsonProperty("cDownloadSource")
	public Short getDownloadSource() {
		return this.cDownloadSource;
	}
    @JsonProperty("cDownloadSource")
	public void setDownloadSource(Short cDownloadSource) {
		this.cDownloadSource = cDownloadSource;
	}

    @JsonProperty("cDownloadMsg")
	public String getDownloadMsg() {
		return this.cDownloadMsg;
	}
    @JsonProperty("cDownloadMsg")
	public void setDownloadMsg(String cDownloadMsg) {
		this.cDownloadMsg = cDownloadMsg;
	}

    @JsonProperty("cDownloadU8Date")
	public String getDownloadU8Date() {
		return this.cDownloadU8Date;
	}
    @JsonProperty("cDownloadU8Date")
	public void setDownloadU8Date(String cDownloadU8Date) {
		this.cDownloadU8Date = cDownloadU8Date;
	}

    @JsonProperty("cErpTS")
	public String getErpTS() {
		return this.cErpTS;
	}
    @JsonProperty("cErpTS")
	public void setErpTS(String cErpTS) {
		this.cErpTS = cErpTS;
	}

    @JsonProperty("oSubmiter")
	public VoucherUserModelVo getSubmiter() {
		return this.oSubmiter;
	}
    @JsonProperty("oSubmiter")
	public void setSubmiter(VoucherUserModelVo oSubmiter) {
		this.oSubmiter = oSubmiter;
	}

    @JsonProperty("oAgent")
	public VoucherAgentModelVo getAgent() {
		return this.oAgent;
	}
    @JsonProperty("oAgent")
	public void setAgent(VoucherAgentModelVo oAgent) {
		this.oAgent = oAgent;
	}

    @JsonProperty("agentInfoVo")
	public AgentInfoVo getAgentInfoVo() {
		return this.agentInfoVo;
	}
    @JsonProperty("agentInfoVo")
	public void setAgentInfoVo(AgentInfoVo agentInfoVo) {
		this.agentInfoVo = agentInfoVo;
	}

    @JsonProperty("oOrderDefine")
	public OrderDefine getOrderDefine() {
		return this.oOrderDefine;
	}
    @JsonProperty("oOrderDefine")
	public void setOrderDefine(OrderDefine oOrderDefine) {
		this.oOrderDefine = oOrderDefine;
	}

	@JsonProperty("oStatusRecord")
	public List<OrderStatusVo> getStatusRecord() {
		return this.oStatusRecord;
	}
	
	@JsonProperty("oStatusRecord")
	public void setStatusRecord(List<OrderStatusVo> oStatusRecord) {
		this.oStatusRecord = oStatusRecord;
	}
	@JsonProperty("oOrderStatuses")
	public List<OrderStatusVo> getOrderStatuses() {
		return this.oOrderStatuses;
	}
	
	@JsonProperty("oOrderStatuses")
	public void setOrderStatuses(List<OrderStatusVo> oOrderStatuses) {
		this.oOrderStatuses = oOrderStatuses;
	}
	@JsonProperty("oOrderDetails")
	public List<OrderDetailModelVo> getOrderDetails() {
		return this.oOrderDetails;
	}
	
	@JsonProperty("oOrderDetails")
	public void setOrderDetails(List<OrderDetailModelVo> oOrderDetails) {
		this.oOrderDetails = oOrderDetails;
	}
    @JsonProperty("isShowHopeReceiveDate")
	public Boolean getIsShowHopeReceiveDate() {
		return this.isShowHopeReceiveDate;
	}
    @JsonProperty("isShowHopeReceiveDate")
	public void setIsShowHopeReceiveDate(Boolean isShowHopeReceiveDate) {
		this.isShowHopeReceiveDate = isShowHopeReceiveDate;
	}

    @JsonProperty("isRequiredHopeReceiveDate")
	public Boolean getIsRequiredHopeReceiveDate() {
		return this.isRequiredHopeReceiveDate;
	}
    @JsonProperty("isRequiredHopeReceiveDate")
	public void setIsRequiredHopeReceiveDate(Boolean isRequiredHopeReceiveDate) {
		this.isRequiredHopeReceiveDate = isRequiredHopeReceiveDate;
	}

    @JsonProperty("isAgentSubmit")
	public Boolean getIsAgentSubmit() {
		return this.isAgentSubmit;
	}
    @JsonProperty("isAgentSubmit")
	public void setIsAgentSubmit(Boolean isAgentSubmit) {
		this.isAgentSubmit = isAgentSubmit;
	}

	@JsonProperty("oOrderDetailGroups")
	public List<OrderDetailGroupModelVo> getOrderDetailGroups() {
		return this.oOrderDetailGroups;
	}
	
	@JsonProperty("oOrderDetailGroups")
	public void setOrderDetailGroups(List<OrderDetailGroupModelVo> oOrderDetailGroups) {
		this.oOrderDetailGroups = oOrderDetailGroups;
	}
	@JsonProperty("orderDetailGroupSuiteVos")
	public List<OrderDetailGroupSuiteVo> getOrderDetailGroupSuiteVos() {
		return this.orderDetailGroupSuiteVos;
	}
	
	@JsonProperty("orderDetailGroupSuiteVos")
	public void setOrderDetailGroupSuiteVos(List<OrderDetailGroupSuiteVo> orderDetailGroupSuiteVos) {
		this.orderDetailGroupSuiteVos = orderDetailGroupSuiteVos;
	}
	@JsonProperty("addOnGroups")
	public List<OrderDetailGroupModelVo> getAddOnGroups() {
		return this.addOnGroups;
	}
	
	@JsonProperty("addOnGroups")
	public void setAddOnGroups(List<OrderDetailGroupModelVo> addOnGroups) {
		this.addOnGroups = addOnGroups;
	}
	@JsonProperty("oOrderBizGroups")
	public List<OrderBizGroupVo> getOrderBizGroups() {
		return this.oOrderBizGroups;
	}
	
	@JsonProperty("oOrderBizGroups")
	public void setOrderBizGroups(List<OrderBizGroupVo> oOrderBizGroups) {
		this.oOrderBizGroups = oOrderBizGroups;
	}
	public OrderPayWay getOrderPayType() {
        if(this.cOrderPayType == null){
			return null;
		}
		return OrderPayWay.find(this.cOrderPayType);
	}
	
	@JsonSetter
    @JsonProperty("cOrderPayType")
	public void setOrderPayType(OrderPayWay cOrderPayType) {
		Assert.notNull(cOrderPayType, "OrderModelVo.cOrderPayType:enum[OrderPayWay] value must not be null!");
		this.cOrderPayType = cOrderPayType.getName();
	}
	
	public void setOrderPayType(String cOrderPayType) {
		Assert.notNull(cOrderPayType, "OrderModelVo.cOrderPayType:enum[OrderPayWay] value must not be null!");
		Assert.notNull(OrderPayWay.find(cOrderPayType),String.format("OrderModelVo.cOrderPayType:enum[OrderPayWay] value:%s is invalid value!",cOrderPayType)); 
		this.cOrderPayType = cOrderPayType;
	}
    @JsonProperty("oPayWayCode")
	public StatusEnumModelVo getPayWayCode() {
		return this.oPayWayCode;
	}
    @JsonProperty("oPayWayCode")
	public void setPayWayCode(StatusEnumModelVo oPayWayCode) {
		this.oPayWayCode = oPayWayCode;
	}

	public VoucherType getSettVoucherType() {
        if(this.cSettVoucherType == null){
			return null;
		}
		return VoucherType.find(this.cSettVoucherType);
	}
	
	@JsonSetter
    @JsonProperty("cSettVoucherType")
	public void setSettVoucherType(VoucherType cSettVoucherType) {
		Assert.notNull(cSettVoucherType, "OrderModelVo.cSettVoucherType:enum[VoucherType] value must not be null!");
		this.cSettVoucherType = cSettVoucherType.getName();
	}
	
	public void setSettVoucherType(String cSettVoucherType) {
		Assert.notNull(cSettVoucherType, "OrderModelVo.cSettVoucherType:enum[VoucherType] value must not be null!");
		Assert.notNull(VoucherType.find(cSettVoucherType),String.format("OrderModelVo.cSettVoucherType:enum[VoucherType] value:%s is invalid value!",cSettVoucherType)); 
		this.cSettVoucherType = cSettVoucherType;
	}
    @JsonProperty("oTransactionType")
	public TransactionTypeModelVo getTransactionType() {
		return this.oTransactionType;
	}
    @JsonProperty("oTransactionType")
	public void setTransactionType(TransactionTypeModelVo oTransactionType) {
		this.oTransactionType = oTransactionType;
	}

    @JsonProperty("iTransactionTypeId")
	public Long getTransactionTypeId() {
		return this.iTransactionTypeId;
	}
    @JsonProperty("iTransactionTypeId")
	public void setTransactionTypeId(Long iTransactionTypeId) {
		this.iTransactionTypeId = iTransactionTypeId;
	}

    @JsonProperty("iSettlementId")
	public Long getSettlementId() {
		return this.iSettlementId;
	}
    @JsonProperty("iSettlementId")
	public void setSettlementId(Long iSettlementId) {
		this.iSettlementId = iSettlementId;
	}

    @JsonProperty("oSettlementWay")
	public SettlementWayModelVo getSettlementWay() {
		return this.oSettlementWay;
	}
    @JsonProperty("oSettlementWay")
	public void setSettlementWay(SettlementWayModelVo oSettlementWay) {
		this.oSettlementWay = oSettlementWay;
	}

    @JsonProperty("cShippingChoiceCode")
	public String getShippingChoiceCode() {
		return this.cShippingChoiceCode;
	}
    @JsonProperty("cShippingChoiceCode")
	public void setShippingChoiceCode(String cShippingChoiceCode) {
		this.cShippingChoiceCode = cShippingChoiceCode;
	}

    @JsonProperty("oShippingChoice")
	public ShippingChoiceModelVo getShippingChoice() {
		return this.oShippingChoice;
	}
    @JsonProperty("oShippingChoice")
	public void setShippingChoice(ShippingChoiceModelVo oShippingChoice) {
		this.oShippingChoice = oShippingChoice;
	}

	@JsonProperty("oOrderMemos")
	public List<VoucherMemoModelVo> getOrderMemos() {
		return this.oOrderMemos;
	}
	
	@JsonProperty("oOrderMemos")
	public void setOrderMemos(List<VoucherMemoModelVo> oOrderMemos) {
		this.oOrderMemos = oOrderMemos;
	}
    @JsonProperty("cBizOutSysKey")
	public String getBizOutSysKey() {
		return this.cBizOutSysKey;
	}
    @JsonProperty("cBizOutSysKey")
	public void setBizOutSysKey(String cBizOutSysKey) {
		this.cBizOutSysKey = cBizOutSysKey;
	}

    @JsonProperty("iBizType")
	public Short getBizType() {
		return this.iBizType;
	}
    @JsonProperty("iBizType")
	public void setBizType(Short iBizType) {
		this.iBizType = iBizType;
	}

    @JsonProperty("salesOrgName")
	public String getSalesOrgName() {
		return this.salesOrgName;
	}
    @JsonProperty("salesOrgName")
	public void setSalesOrgName(String salesOrgName) {
		this.salesOrgName = salesOrgName;
	}

    @JsonProperty("saleDepartmentName")
	public String getSaleDepartmentName() {
		return this.saleDepartmentName;
	}
    @JsonProperty("saleDepartmentName")
	public void setSaleDepartmentName(String saleDepartmentName) {
		this.saleDepartmentName = saleDepartmentName;
	}

    @JsonProperty("settlementOrgName")
	public String getSettlementOrgName() {
		return this.settlementOrgName;
	}
    @JsonProperty("settlementOrgName")
	public void setSettlementOrgName(String settlementOrgName) {
		this.settlementOrgName = settlementOrgName;
	}

    @JsonProperty("cSalesOrgOutSysKey")
	public String getSalesOrgOutSysKey() {
		return this.cSalesOrgOutSysKey;
	}
    @JsonProperty("cSalesOrgOutSysKey")
	public void setSalesOrgOutSysKey(String cSalesOrgOutSysKey) {
		this.cSalesOrgOutSysKey = cSalesOrgOutSysKey;
	}

    @JsonProperty("cSettlementOrgOutSysKey")
	public String getSettlementOrgOutSysKey() {
		return this.cSettlementOrgOutSysKey;
	}
    @JsonProperty("cSettlementOrgOutSysKey")
	public void setSettlementOrgOutSysKey(String cSettlementOrgOutSysKey) {
		this.cSettlementOrgOutSysKey = cSettlementOrgOutSysKey;
	}

    @JsonProperty("cOrderPaymentStatusName")
	public String getOrderPaymentStatusName() {
		return this.cOrderPaymentStatusName;
	}
    @JsonProperty("cOrderPaymentStatusName")
	public void setOrderPaymentStatusName(String cOrderPaymentStatusName) {
		this.cOrderPaymentStatusName = cOrderPaymentStatusName;
	}

    @JsonProperty("cSettlementName")
	public String getSettlementName() {
		return this.cSettlementName;
	}
    @JsonProperty("cSettlementName")
	public void setSettlementName(String cSettlementName) {
		this.cSettlementName = cSettlementName;
	}

    @JsonProperty("cSplitMoment")
	public String getSplitMoment() {
		return this.cSplitMoment;
	}
    @JsonProperty("cSplitMoment")
	public void setSplitMoment(String cSplitMoment) {
		this.cSplitMoment = cSplitMoment;
	}

    @JsonProperty("cRemark")
	public String getRemark() {
		return this.cRemark;
	}
    @JsonProperty("cRemark")
	public void setRemark(String cRemark) {
		this.cRemark = cRemark;
	}

    @JsonProperty("isSingle")
	public Boolean getIsSingle() {
		if(this.isSingle == null){
			return true;
        }
		return this.isSingle;
	}
    @JsonProperty("isSingle")
	public void setIsSingle(Boolean isSingle) {
		this.isSingle = isSingle;
	}

    @JsonProperty("isOnlyOrg")
	public Boolean getIsOnlyOrg() {
		if(this.isOnlyOrg == null){
			return true;
        }
		return this.isOnlyOrg;
	}
    @JsonProperty("isOnlyOrg")
	public void setIsOnlyOrg(Boolean isOnlyOrg) {
		this.isOnlyOrg = isOnlyOrg;
	}

    @JsonProperty("oContactUser")
	public ContacterVo getContactUser() {
		return this.oContactUser;
	}
    @JsonProperty("oContactUser")
	public void setContactUser(ContacterVo oContactUser) {
		this.oContactUser = oContactUser;
	}

    @JsonProperty("paidMoney")
	public BigDecimal getPaidMoney() {
		return this.paidMoney;
	}
    @JsonProperty("paidMoney")
	public void setPaidMoney(BigDecimal paidMoney) {
		this.paidMoney = paidMoney;
	}

    @JsonProperty("unConfirmMoney")
	public BigDecimal getUnConfirmMoney() {
		return this.unConfirmMoney;
	}
    @JsonProperty("unConfirmMoney")
	public void setUnConfirmMoney(BigDecimal unConfirmMoney) {
		this.unConfirmMoney = unConfirmMoney;
	}

    @JsonProperty("exchangeRateType")
	public String getExchangeRateType() {
		return this.exchangeRateType;
	}
    @JsonProperty("exchangeRateType")
	public void setExchangeRateType(String exchangeRateType) {
		this.exchangeRateType = exchangeRateType;
	}

    @JsonProperty("exchangeRate")
	public BigDecimal getExchangeRate() {
		return this.exchangeRate;
	}
    @JsonProperty("exchangeRate")
	public void setExchangeRate(BigDecimal exchangeRate) {
		this.exchangeRate = exchangeRate;
	}

	@JsonProperty("oRebates")
	public List<RebateVo> getRebates() {
		return this.oRebates;
	}
	
	@JsonProperty("oRebates")
	public void setRebates(List<RebateVo> oRebates) {
		this.oRebates = oRebates;
	}
    @JsonProperty("fMaxRebateMoney")
	public BigDecimal getMaxRebateMoney() {
		return this.fMaxRebateMoney;
	}
    @JsonProperty("fMaxRebateMoney")
	public void setMaxRebateMoney(BigDecimal fMaxRebateMoney) {
		this.fMaxRebateMoney = fMaxRebateMoney;
	}

    @JsonProperty("fMaxRebateRuleMoney")
	public BigDecimal getMaxRebateRuleMoney() {
		if(this.fMaxRebateRuleMoney == null){
			return BigDecimal.ZERO;
        }
		return this.fMaxRebateRuleMoney;
	}
    @JsonProperty("fMaxRebateRuleMoney")
	public void setMaxRebateRuleMoney(BigDecimal fMaxRebateRuleMoney) {
		this.fMaxRebateRuleMoney = fMaxRebateRuleMoney;
	}

    @JsonProperty("fMiniRebateRuleMoney")
	public BigDecimal getMiniRebateRuleMoney() {
		if(this.fMiniRebateRuleMoney == null){
			return BigDecimal.ZERO;
        }
		return this.fMiniRebateRuleMoney;
	}
    @JsonProperty("fMiniRebateRuleMoney")
	public void setMiniRebateRuleMoney(BigDecimal fMiniRebateRuleMoney) {
		this.fMiniRebateRuleMoney = fMiniRebateRuleMoney;
	}

    @JsonProperty("isCanUsedRebate")
	public Boolean getIsCanUsedRebate() {
		if(this.isCanUsedRebate == null){
			return false;
        }
		return this.isCanUsedRebate;
	}
    @JsonProperty("isCanUsedRebate")
	public void setIsCanUsedRebate(Boolean isCanUsedRebate) {
		this.isCanUsedRebate = isCanUsedRebate;
	}

    @JsonProperty("rebateSurplusMoney")
	public BigDecimal getRebateSurplusMoney() {
		return this.rebateSurplusMoney;
	}
    @JsonProperty("rebateSurplusMoney")
	public void setRebateSurplusMoney(BigDecimal rebateSurplusMoney) {
		this.rebateSurplusMoney = rebateSurplusMoney;
	}

    @JsonProperty("surplusMaxRebateMoney")
	public BigDecimal getSurplusMaxRebateMoney() {
		return this.surplusMaxRebateMoney;
	}
    @JsonProperty("surplusMaxRebateMoney")
	public void setSurplusMaxRebateMoney(BigDecimal surplusMaxRebateMoney) {
		this.surplusMaxRebateMoney = surplusMaxRebateMoney;
	}

    @JsonProperty("surplusCashMaxRebateMoney")
	public BigDecimal getSurplusCashMaxRebateMoney() {
		return this.surplusCashMaxRebateMoney;
	}
    @JsonProperty("surplusCashMaxRebateMoney")
	public void setSurplusCashMaxRebateMoney(BigDecimal surplusCashMaxRebateMoney) {
		this.surplusCashMaxRebateMoney = surplusCashMaxRebateMoney;
	}

    @JsonProperty("totalRebateMoney")
	public BigDecimal getTotalRebateMoney() {
		return this.totalRebateMoney;
	}
    @JsonProperty("totalRebateMoney")
	public void setTotalRebateMoney(BigDecimal totalRebateMoney) {
		this.totalRebateMoney = totalRebateMoney;
	}

    @JsonProperty("orderMaxRebateMoney")
	public BigDecimal getOrderMaxRebateMoney() {
		return this.orderMaxRebateMoney;
	}
    @JsonProperty("orderMaxRebateMoney")
	public void setOrderMaxRebateMoney(BigDecimal orderMaxRebateMoney) {
		this.orderMaxRebateMoney = orderMaxRebateMoney;
	}

    @JsonProperty("orderCashMaxRebateMoney")
	public BigDecimal getOrderCashMaxRebateMoney() {
		return this.orderCashMaxRebateMoney;
	}
    @JsonProperty("orderCashMaxRebateMoney")
	public void setOrderCashMaxRebateMoney(BigDecimal orderCashMaxRebateMoney) {
		this.orderCashMaxRebateMoney = orderCashMaxRebateMoney;
	}

    @JsonProperty("displayAvailableRebateTips")
	public Boolean getDisplayAvailableRebateTips() {
		return this.displayAvailableRebateTips;
	}
    @JsonProperty("displayAvailableRebateTips")
	public void setDisplayAvailableRebateTips(Boolean displayAvailableRebateTips) {
		this.displayAvailableRebateTips = displayAvailableRebateTips;
	}

    @JsonProperty("bizs")
	public Boolean getBizs() {
		if(this.bizs == null){
			return false;
        }
		return this.bizs;
	}
    @JsonProperty("bizs")
	public void setBizs(Boolean bizs) {
		this.bizs = bizs;
	}

    @JsonProperty("originalPk")
	public String getOriginalPk() {
		return this.originalPk;
	}
    @JsonProperty("originalPk")
	public void setOriginalPk(String originalPk) {
		this.originalPk = originalPk;
	}

    @JsonProperty("originalCode")
	public String getOriginalCode() {
		return this.originalCode;
	}
    @JsonProperty("originalCode")
	public void setOriginalCode(String originalCode) {
		this.originalCode = originalCode;
	}

    @JsonProperty("originalName")
	public String getOriginalName() {
		return this.originalName;
	}
    @JsonProperty("originalName")
	public void setOriginalName(String originalName) {
		this.originalName = originalName;
	}

    @JsonProperty("domesticPk")
	public String getDomesticPk() {
		return this.domesticPk;
	}
    @JsonProperty("domesticPk")
	public void setDomesticPk(String domesticPk) {
		this.domesticPk = domesticPk;
	}

    @JsonProperty("domesticCode")
	public String getDomesticCode() {
		return this.domesticCode;
	}
    @JsonProperty("domesticCode")
	public void setDomesticCode(String domesticCode) {
		this.domesticCode = domesticCode;
	}

    @JsonProperty("domesticName")
	public String getDomesticName() {
		return this.domesticName;
	}
    @JsonProperty("domesticName")
	public void setDomesticName(String domesticName) {
		this.domesticName = domesticName;
	}

    @JsonProperty("taxItems")
	public String getTaxItems() {
		return this.taxItems;
	}
    @JsonProperty("taxItems")
	public void setTaxItems(String taxItems) {
		this.taxItems = taxItems;
	}

    @JsonProperty("taxRate")
	public BigDecimal getTaxRate() {
		return this.taxRate;
	}
    @JsonProperty("taxRate")
	public void setTaxRate(BigDecimal taxRate) {
		this.taxRate = taxRate;
	}

    @JsonProperty("taxInclusive")
	public Boolean getTaxInclusive() {
		return this.taxInclusive;
	}
    @JsonProperty("taxInclusive")
	public void setTaxInclusive(Boolean taxInclusive) {
		this.taxInclusive = taxInclusive;
	}

    @JsonProperty("totalMoneyOrigTaxfree")
	public BigDecimal getTotalMoneyOrigTaxfree() {
		return this.totalMoneyOrigTaxfree;
	}
    @JsonProperty("totalMoneyOrigTaxfree")
	public void setTotalMoneyOrigTaxfree(BigDecimal totalMoneyOrigTaxfree) {
		this.totalMoneyOrigTaxfree = totalMoneyOrigTaxfree;
	}

    @JsonProperty("rebateMoneyOrigTaxfree")
	public BigDecimal getRebateMoneyOrigTaxfree() {
		return this.rebateMoneyOrigTaxfree;
	}
    @JsonProperty("rebateMoneyOrigTaxfree")
	public void setRebateMoneyOrigTaxfree(BigDecimal rebateMoneyOrigTaxfree) {
		this.rebateMoneyOrigTaxfree = rebateMoneyOrigTaxfree;
	}

    @JsonProperty("rebateCashMoneyOrigTaxfree")
	public BigDecimal getRebateCashMoneyOrigTaxfree() {
		return this.rebateCashMoneyOrigTaxfree;
	}
    @JsonProperty("rebateCashMoneyOrigTaxfree")
	public void setRebateCashMoneyOrigTaxfree(BigDecimal rebateCashMoneyOrigTaxfree) {
		this.rebateCashMoneyOrigTaxfree = rebateCashMoneyOrigTaxfree;
	}

    @JsonProperty("payMoneyOrigTaxfree")
	public BigDecimal getPayMoneyOrigTaxfree() {
		return this.payMoneyOrigTaxfree;
	}
    @JsonProperty("payMoneyOrigTaxfree")
	public void setPayMoneyOrigTaxfree(BigDecimal payMoneyOrigTaxfree) {
		this.payMoneyOrigTaxfree = payMoneyOrigTaxfree;
	}

    @JsonProperty("orderPayMoneyOrigTaxfree")
	public BigDecimal getOrderPayMoneyOrigTaxfree() {
		return this.orderPayMoneyOrigTaxfree;
	}
    @JsonProperty("orderPayMoneyOrigTaxfree")
	public void setOrderPayMoneyOrigTaxfree(BigDecimal orderPayMoneyOrigTaxfree) {
		this.orderPayMoneyOrigTaxfree = orderPayMoneyOrigTaxfree;
	}

    @JsonProperty("realMoneyOrigTaxfree")
	public BigDecimal getRealMoneyOrigTaxfree() {
		return this.realMoneyOrigTaxfree;
	}
    @JsonProperty("realMoneyOrigTaxfree")
	public void setRealMoneyOrigTaxfree(BigDecimal realMoneyOrigTaxfree) {
		this.realMoneyOrigTaxfree = realMoneyOrigTaxfree;
	}

    @JsonProperty("orderRealMoneyOrigTaxfree")
	public BigDecimal getOrderRealMoneyOrigTaxfree() {
		return this.orderRealMoneyOrigTaxfree;
	}
    @JsonProperty("orderRealMoneyOrigTaxfree")
	public void setOrderRealMoneyOrigTaxfree(BigDecimal orderRealMoneyOrigTaxfree) {
		this.orderRealMoneyOrigTaxfree = orderRealMoneyOrigTaxfree;
	}

    @JsonProperty("reightMoneyOrigTaxfree")
	public BigDecimal getReightMoneyOrigTaxfree() {
		return this.reightMoneyOrigTaxfree;
	}
    @JsonProperty("reightMoneyOrigTaxfree")
	public void setReightMoneyOrigTaxfree(BigDecimal reightMoneyOrigTaxfree) {
		this.reightMoneyOrigTaxfree = reightMoneyOrigTaxfree;
	}

    @JsonProperty("particularlyMoneyOrigTaxfree")
	public BigDecimal getParticularlyMoneyOrigTaxfree() {
		return this.particularlyMoneyOrigTaxfree;
	}
    @JsonProperty("particularlyMoneyOrigTaxfree")
	public void setParticularlyMoneyOrigTaxfree(BigDecimal particularlyMoneyOrigTaxfree) {
		this.particularlyMoneyOrigTaxfree = particularlyMoneyOrigTaxfree;
	}

    @JsonProperty("promotionMoneyOrigTaxfree")
	public BigDecimal getPromotionMoneyOrigTaxfree() {
		return this.promotionMoneyOrigTaxfree;
	}
    @JsonProperty("promotionMoneyOrigTaxfree")
	public void setPromotionMoneyOrigTaxfree(BigDecimal promotionMoneyOrigTaxfree) {
		this.promotionMoneyOrigTaxfree = promotionMoneyOrigTaxfree;
	}

    @JsonProperty("pointsMoneyOrigTaxfree")
	public BigDecimal getPointsMoneyOrigTaxfree() {
		return this.pointsMoneyOrigTaxfree;
	}
    @JsonProperty("pointsMoneyOrigTaxfree")
	public void setPointsMoneyOrigTaxfree(BigDecimal pointsMoneyOrigTaxfree) {
		this.pointsMoneyOrigTaxfree = pointsMoneyOrigTaxfree;
	}

    @JsonProperty("totalMoneyDomestic")
	public BigDecimal getTotalMoneyDomestic() {
		return this.totalMoneyDomestic;
	}
    @JsonProperty("totalMoneyDomestic")
	public void setTotalMoneyDomestic(BigDecimal totalMoneyDomestic) {
		this.totalMoneyDomestic = totalMoneyDomestic;
	}

    @JsonProperty("rebateMoneyDomestic")
	public BigDecimal getRebateMoneyDomestic() {
		return this.rebateMoneyDomestic;
	}
    @JsonProperty("rebateMoneyDomestic")
	public void setRebateMoneyDomestic(BigDecimal rebateMoneyDomestic) {
		this.rebateMoneyDomestic = rebateMoneyDomestic;
	}

    @JsonProperty("rebateCashMoneyDomestic")
	public BigDecimal getRebateCashMoneyDomestic() {
		return this.rebateCashMoneyDomestic;
	}
    @JsonProperty("rebateCashMoneyDomestic")
	public void setRebateCashMoneyDomestic(BigDecimal rebateCashMoneyDomestic) {
		this.rebateCashMoneyDomestic = rebateCashMoneyDomestic;
	}

    @JsonProperty("payMoneyDomestic")
	public BigDecimal getPayMoneyDomestic() {
		return this.payMoneyDomestic;
	}
    @JsonProperty("payMoneyDomestic")
	public void setPayMoneyDomestic(BigDecimal payMoneyDomestic) {
		this.payMoneyDomestic = payMoneyDomestic;
	}

    @JsonProperty("orderPayMoneyDomestic")
	public BigDecimal getOrderPayMoneyDomestic() {
		return this.orderPayMoneyDomestic;
	}
    @JsonProperty("orderPayMoneyDomestic")
	public void setOrderPayMoneyDomestic(BigDecimal orderPayMoneyDomestic) {
		this.orderPayMoneyDomestic = orderPayMoneyDomestic;
	}

    @JsonProperty("realMoneyDomestic")
	public BigDecimal getRealMoneyDomestic() {
		return this.realMoneyDomestic;
	}
    @JsonProperty("realMoneyDomestic")
	public void setRealMoneyDomestic(BigDecimal realMoneyDomestic) {
		this.realMoneyDomestic = realMoneyDomestic;
	}

    @JsonProperty("orderRealMoneyDomestic")
	public BigDecimal getOrderRealMoneyDomestic() {
		return this.orderRealMoneyDomestic;
	}
    @JsonProperty("orderRealMoneyDomestic")
	public void setOrderRealMoneyDomestic(BigDecimal orderRealMoneyDomestic) {
		this.orderRealMoneyDomestic = orderRealMoneyDomestic;
	}

    @JsonProperty("reightMoneyDomestic")
	public BigDecimal getReightMoneyDomestic() {
		return this.reightMoneyDomestic;
	}
    @JsonProperty("reightMoneyDomestic")
	public void setReightMoneyDomestic(BigDecimal reightMoneyDomestic) {
		this.reightMoneyDomestic = reightMoneyDomestic;
	}

    @JsonProperty("particularlyMoneyDomestic")
	public BigDecimal getParticularlyMoneyDomestic() {
		return this.particularlyMoneyDomestic;
	}
    @JsonProperty("particularlyMoneyDomestic")
	public void setParticularlyMoneyDomestic(BigDecimal particularlyMoneyDomestic) {
		this.particularlyMoneyDomestic = particularlyMoneyDomestic;
	}

    @JsonProperty("promotionMoneyDomestic")
	public BigDecimal getPromotionMoneyDomestic() {
		return this.promotionMoneyDomestic;
	}
    @JsonProperty("promotionMoneyDomestic")
	public void setPromotionMoneyDomestic(BigDecimal promotionMoneyDomestic) {
		this.promotionMoneyDomestic = promotionMoneyDomestic;
	}

    @JsonProperty("pointsMoneyDomestic")
	public BigDecimal getPointsMoneyDomestic() {
		return this.pointsMoneyDomestic;
	}
    @JsonProperty("pointsMoneyDomestic")
	public void setPointsMoneyDomestic(BigDecimal pointsMoneyDomestic) {
		this.pointsMoneyDomestic = pointsMoneyDomestic;
	}

    @JsonProperty("totalMoneyDomesticTaxfree")
	public BigDecimal getTotalMoneyDomesticTaxfree() {
		return this.totalMoneyDomesticTaxfree;
	}
    @JsonProperty("totalMoneyDomesticTaxfree")
	public void setTotalMoneyDomesticTaxfree(BigDecimal totalMoneyDomesticTaxfree) {
		this.totalMoneyDomesticTaxfree = totalMoneyDomesticTaxfree;
	}

    @JsonProperty("rebateMoneyDomesticTaxfree")
	public BigDecimal getRebateMoneyDomesticTaxfree() {
		return this.rebateMoneyDomesticTaxfree;
	}
    @JsonProperty("rebateMoneyDomesticTaxfree")
	public void setRebateMoneyDomesticTaxfree(BigDecimal rebateMoneyDomesticTaxfree) {
		this.rebateMoneyDomesticTaxfree = rebateMoneyDomesticTaxfree;
	}

    @JsonProperty("rebateCashMoneyDomesticTaxfree")
	public BigDecimal getRebateCashMoneyDomesticTaxfree() {
		return this.rebateCashMoneyDomesticTaxfree;
	}
    @JsonProperty("rebateCashMoneyDomesticTaxfree")
	public void setRebateCashMoneyDomesticTaxfree(BigDecimal rebateCashMoneyDomesticTaxfree) {
		this.rebateCashMoneyDomesticTaxfree = rebateCashMoneyDomesticTaxfree;
	}

    @JsonProperty("payMoneyDomesticTaxfree")
	public BigDecimal getPayMoneyDomesticTaxfree() {
		return this.payMoneyDomesticTaxfree;
	}
    @JsonProperty("payMoneyDomesticTaxfree")
	public void setPayMoneyDomesticTaxfree(BigDecimal payMoneyDomesticTaxfree) {
		this.payMoneyDomesticTaxfree = payMoneyDomesticTaxfree;
	}

    @JsonProperty("orderPayMoneyDomesticTaxfree")
	public BigDecimal getOrderPayMoneyDomesticTaxfree() {
		return this.orderPayMoneyDomesticTaxfree;
	}
    @JsonProperty("orderPayMoneyDomesticTaxfree")
	public void setOrderPayMoneyDomesticTaxfree(BigDecimal orderPayMoneyDomesticTaxfree) {
		this.orderPayMoneyDomesticTaxfree = orderPayMoneyDomesticTaxfree;
	}

    @JsonProperty("realMoneyDomesticTaxfree")
	public BigDecimal getRealMoneyDomesticTaxfree() {
		return this.realMoneyDomesticTaxfree;
	}
    @JsonProperty("realMoneyDomesticTaxfree")
	public void setRealMoneyDomesticTaxfree(BigDecimal realMoneyDomesticTaxfree) {
		this.realMoneyDomesticTaxfree = realMoneyDomesticTaxfree;
	}

    @JsonProperty("orderRealMoneyDomesticTaxfree")
	public BigDecimal getOrderRealMoneyDomesticTaxfree() {
		return this.orderRealMoneyDomesticTaxfree;
	}
    @JsonProperty("orderRealMoneyDomesticTaxfree")
	public void setOrderRealMoneyDomesticTaxfree(BigDecimal orderRealMoneyDomesticTaxfree) {
		this.orderRealMoneyDomesticTaxfree = orderRealMoneyDomesticTaxfree;
	}

    @JsonProperty("reightMoneyDomesticTaxfree")
	public BigDecimal getReightMoneyDomesticTaxfree() {
		return this.reightMoneyDomesticTaxfree;
	}
    @JsonProperty("reightMoneyDomesticTaxfree")
	public void setReightMoneyDomesticTaxfree(BigDecimal reightMoneyDomesticTaxfree) {
		this.reightMoneyDomesticTaxfree = reightMoneyDomesticTaxfree;
	}

    @JsonProperty("particularlyMoneyDomesticTaxfree")
	public BigDecimal getParticularlyMoneyDomesticTaxfree() {
		return this.particularlyMoneyDomesticTaxfree;
	}
    @JsonProperty("particularlyMoneyDomesticTaxfree")
	public void setParticularlyMoneyDomesticTaxfree(BigDecimal particularlyMoneyDomesticTaxfree) {
		this.particularlyMoneyDomesticTaxfree = particularlyMoneyDomesticTaxfree;
	}

    @JsonProperty("promotionMoneyDomesticTaxfree")
	public BigDecimal getPromotionMoneyDomesticTaxfree() {
		return this.promotionMoneyDomesticTaxfree;
	}
    @JsonProperty("promotionMoneyDomesticTaxfree")
	public void setPromotionMoneyDomesticTaxfree(BigDecimal promotionMoneyDomesticTaxfree) {
		this.promotionMoneyDomesticTaxfree = promotionMoneyDomesticTaxfree;
	}

    @JsonProperty("pointsMoneyDomesticTaxfree")
	public BigDecimal getPointsMoneyDomesticTaxfree() {
		return this.pointsMoneyDomesticTaxfree;
	}
    @JsonProperty("pointsMoneyDomesticTaxfree")
	public void setPointsMoneyDomesticTaxfree(BigDecimal pointsMoneyDomesticTaxfree) {
		this.pointsMoneyDomesticTaxfree = pointsMoneyDomesticTaxfree;
	}

    @JsonProperty("orderPrice")
	public OrderPrice getOrderPrice() {
		return this.orderPrice;
	}
    @JsonProperty("orderPrice")
	public void setOrderPrice(OrderPrice orderPrice) {
		this.orderPrice = orderPrice;
	}

    @JsonProperty("iCorpId")
	public Long getCorpId() {
		return this.iCorpId;
	}
    @JsonProperty("iCorpId")
	public void setCorpId(Long iCorpId) {
		this.iCorpId = iCorpId;
	}

    @JsonProperty("isSplitOrder")
	public Boolean getIsSplitOrder() {
		return this.isSplitOrder;
	}
    @JsonProperty("isSplitOrder")
	public void setIsSplitOrder(Boolean isSplitOrder) {
		this.isSplitOrder = isSplitOrder;
	}

    @JsonProperty("isSecondUser")
	public Boolean getIsSecondUser() {
		return this.isSecondUser;
	}
    @JsonProperty("isSecondUser")
	public void setIsSecondUser(Boolean isSecondUser) {
		this.isSecondUser = isSecondUser;
	}

    @JsonProperty("isShowSplitBtn")
	public Boolean getIsShowSplitBtn() {
		return this.isShowSplitBtn;
	}
    @JsonProperty("isShowSplitBtn")
	public void setIsShowSplitBtn(Boolean isShowSplitBtn) {
		this.isShowSplitBtn = isShowSplitBtn;
	}

    @JsonProperty("isCopyOrder")
	public Boolean getIsCopyOrder() {
		return this.isCopyOrder;
	}
    @JsonProperty("isCopyOrder")
	public void setIsCopyOrder(Boolean isCopyOrder) {
		this.isCopyOrder = isCopyOrder;
	}

    @JsonProperty("isShowAgentUserSubmitBtn")
	public Boolean getIsShowAgentUserSubmitBtn() {
		return this.isShowAgentUserSubmitBtn;
	}
    @JsonProperty("isShowAgentUserSubmitBtn")
	public void setIsShowAgentUserSubmitBtn(Boolean isShowAgentUserSubmitBtn) {
		this.isShowAgentUserSubmitBtn = isShowAgentUserSubmitBtn;
	}

    @JsonProperty("isShowModifyBtn")
	public Boolean getIsShowModifyBtn() {
		return this.isShowModifyBtn;
	}
    @JsonProperty("isShowModifyBtn")
	public void setIsShowModifyBtn(Boolean isShowModifyBtn) {
		this.isShowModifyBtn = isShowModifyBtn;
	}

    @JsonProperty("isShowDelBtn")
	public Boolean getIsShowDelBtn() {
		return this.isShowDelBtn;
	}
    @JsonProperty("isShowDelBtn")
	public void setIsShowDelBtn(Boolean isShowDelBtn) {
		this.isShowDelBtn = isShowDelBtn;
	}

    @JsonProperty("isCreateDelivery")
	public Boolean getIsCreateDelivery() {
		return this.isCreateDelivery;
	}
    @JsonProperty("isCreateDelivery")
	public void setIsCreateDelivery(Boolean isCreateDelivery) {
		this.isCreateDelivery = isCreateDelivery;
	}

    @JsonProperty("isShowDeliveryBtn")
	public Boolean getIsShowDeliveryBtn() {
		return this.isShowDeliveryBtn;
	}
    @JsonProperty("isShowDeliveryBtn")
	public void setIsShowDeliveryBtn(Boolean isShowDeliveryBtn) {
		this.isShowDeliveryBtn = isShowDeliveryBtn;
	}

    @JsonProperty("isShowCreateDeliveryBtn")
	public Boolean getIsShowCreateDeliveryBtn() {
		return this.isShowCreateDeliveryBtn;
	}
    @JsonProperty("isShowCreateDeliveryBtn")
	public void setIsShowCreateDeliveryBtn(Boolean isShowCreateDeliveryBtn) {
		this.isShowCreateDeliveryBtn = isShowCreateDeliveryBtn;
	}

    @JsonProperty("isShowCommentBtn")
	public Boolean getIsShowCommentBtn() {
		return this.isShowCommentBtn;
	}
    @JsonProperty("isShowCommentBtn")
	public void setIsShowCommentBtn(Boolean isShowCommentBtn) {
		this.isShowCommentBtn = isShowCommentBtn;
	}

    @JsonProperty("isExistComment")
	public Boolean getIsExistComment() {
		return this.isExistComment;
	}
    @JsonProperty("isExistComment")
	public void setIsExistComment(Boolean isExistComment) {
		this.isExistComment = isExistComment;
	}

    @JsonProperty("isShowConfirmBtn")
	public Boolean getIsShowConfirmBtn() {
		return this.isShowConfirmBtn;
	}
    @JsonProperty("isShowConfirmBtn")
	public void setIsShowConfirmBtn(Boolean isShowConfirmBtn) {
		this.isShowConfirmBtn = isShowConfirmBtn;
	}

    @JsonProperty("isShowOpposeBtn")
	public Boolean getIsShowOpposeBtn() {
		return this.isShowOpposeBtn;
	}
    @JsonProperty("isShowOpposeBtn")
	public void setIsShowOpposeBtn(Boolean isShowOpposeBtn) {
		this.isShowOpposeBtn = isShowOpposeBtn;
	}

    @JsonProperty("isShowClosedDetail")
	public Boolean getIsShowClosedDetail() {
		return this.isShowClosedDetail;
	}
    @JsonProperty("isShowClosedDetail")
	public void setIsShowClosedDetail(Boolean isShowClosedDetail) {
		this.isShowClosedDetail = isShowClosedDetail;
	}

    @JsonProperty("isShowOpenDetail")
	public Boolean getIsShowOpenDetail() {
		return this.isShowOpenDetail;
	}
    @JsonProperty("isShowOpenDetail")
	public void setIsShowOpenDetail(Boolean isShowOpenDetail) {
		this.isShowOpenDetail = isShowOpenDetail;
	}

    @JsonProperty("isShowOrderUnlockBtn")
	public Boolean getIsShowOrderUnlockBtn() {
		return this.isShowOrderUnlockBtn;
	}
    @JsonProperty("isShowOrderUnlockBtn")
	public void setIsShowOrderUnlockBtn(Boolean isShowOrderUnlockBtn) {
		this.isShowOrderUnlockBtn = isShowOrderUnlockBtn;
	}

    @JsonProperty("isShowPayBtn")
	public Boolean getIsShowPayBtn() {
		return this.isShowPayBtn;
	}
    @JsonProperty("isShowPayBtn")
	public void setIsShowPayBtn(Boolean isShowPayBtn) {
		this.isShowPayBtn = isShowPayBtn;
	}

    @JsonProperty("isShowTakeDeliveryBtn")
	public Boolean getIsShowTakeDeliveryBtn() {
		return this.isShowTakeDeliveryBtn;
	}
    @JsonProperty("isShowTakeDeliveryBtn")
	public void setIsShowTakeDeliveryBtn(Boolean isShowTakeDeliveryBtn) {
		this.isShowTakeDeliveryBtn = isShowTakeDeliveryBtn;
	}

    @JsonProperty("isHaveMemo")
	public Boolean getIsHaveMemo() {
		return this.isHaveMemo;
	}
    @JsonProperty("isHaveMemo")
	public void setIsHaveMemo(Boolean isHaveMemo) {
		this.isHaveMemo = isHaveMemo;
	}

    @JsonProperty("isEditPayWay")
	public Boolean getIsEditPayWay() {
		return this.isEditPayWay;
	}
    @JsonProperty("isEditPayWay")
	public void setIsEditPayWay(Boolean isEditPayWay) {
		this.isEditPayWay = isEditPayWay;
	}

    @JsonProperty("isEditReceiveAddress")
	public Boolean getIsEditReceiveAddress() {
		return this.isEditReceiveAddress;
	}
    @JsonProperty("isEditReceiveAddress")
	public void setIsEditReceiveAddress(Boolean isEditReceiveAddress) {
		this.isEditReceiveAddress = isEditReceiveAddress;
	}

    @JsonProperty("isEditInvoice")
	public Boolean getIsEditInvoice() {
		return this.isEditInvoice;
	}
    @JsonProperty("isEditInvoice")
	public void setIsEditInvoice(Boolean isEditInvoice) {
		this.isEditInvoice = isEditInvoice;
	}

    @JsonProperty("isFinishDelivery")
	public Boolean getIsFinishDelivery() {
		return this.isFinishDelivery;
	}
    @JsonProperty("isFinishDelivery")
	public void setIsFinishDelivery(Boolean isFinishDelivery) {
		this.isFinishDelivery = isFinishDelivery;
	}

    @JsonProperty("isShowSaleReturnBtn")
	public Boolean getIsShowSaleReturnBtn() {
		return this.isShowSaleReturnBtn;
	}
    @JsonProperty("isShowSaleReturnBtn")
	public void setIsShowSaleReturnBtn(Boolean isShowSaleReturnBtn) {
		this.isShowSaleReturnBtn = isShowSaleReturnBtn;
	}

    @JsonProperty("isShowOrderRollBack")
	public Boolean getIsShowOrderRollBack() {
		return this.isShowOrderRollBack;
	}
    @JsonProperty("isShowOrderRollBack")
	public void setIsShowOrderRollBack(Boolean isShowOrderRollBack) {
		this.isShowOrderRollBack = isShowOrderRollBack;
	}

    @JsonProperty("cExistPay")
	public String getExistPay() {
		return this.cExistPay;
	}
    @JsonProperty("cExistPay")
	public void setExistPay(String cExistPay) {
		this.cExistPay = cExistPay;
	}

	@JsonProperty("orderCoupons")
	public List<OrderCoupons> getOrderCoupons() {
		return this.orderCoupons;
	}
	
	@JsonProperty("orderCoupons")
	public void setOrderCoupons(List<OrderCoupons> orderCoupons) {
		this.orderCoupons = orderCoupons;
	}
    @JsonProperty("isFinishPackageOrderOrgInfo")
	public Boolean getIsFinishPackageOrderOrgInfo() {
		return this.isFinishPackageOrderOrgInfo;
	}
    @JsonProperty("isFinishPackageOrderOrgInfo")
	public void setIsFinishPackageOrderOrgInfo(Boolean isFinishPackageOrderOrgInfo) {
		this.isFinishPackageOrderOrgInfo = isFinishPackageOrderOrgInfo;
	}

    @JsonProperty("receiveStore")
	public Long getReceiveStore() {
		return this.receiveStore;
	}
    @JsonProperty("receiveStore")
	public void setReceiveStore(Long receiveStore) {
		this.receiveStore = receiveStore;
	}

    @JsonProperty("invoiceId")
	public Long getInvoiceId() {
		return this.invoiceId;
	}
    @JsonProperty("invoiceId")
	public void setInvoiceId(Long invoiceId) {
		this.invoiceId = invoiceId;
	}

    @JsonProperty("invoiceTitleType")
	public Short getInvoiceTitleType() {
		return this.invoiceTitleType;
	}
    @JsonProperty("invoiceTitleType")
	public void setInvoiceTitleType(Short invoiceTitleType) {
		this.invoiceTitleType = invoiceTitleType;
	}

    @JsonProperty("invoiceTitleTypeName")
	public String getInvoiceTitleTypeName() {
		return this.invoiceTitleTypeName;
	}
    @JsonProperty("invoiceTitleTypeName")
	public void setInvoiceTitleTypeName(String invoiceTitleTypeName) {
		this.invoiceTitleTypeName = invoiceTitleTypeName;
	}

    @JsonProperty("defaultInvoiceTypeMap")
	public Map getDefaultInvoiceTypeMap() {
		return this.defaultInvoiceTypeMap;
	}
    @JsonProperty("defaultInvoiceTypeMap")
	public void setDefaultInvoiceTypeMap(Map defaultInvoiceTypeMap) {
		this.defaultInvoiceTypeMap = defaultInvoiceTypeMap;
	}

    @JsonProperty("payWayCodeMap")
	public Map getPayWayCodeMap() {
		return this.payWayCodeMap;
	}
    @JsonProperty("payWayCodeMap")
	public void setPayWayCodeMap(Map payWayCodeMap) {
		this.payWayCodeMap = payWayCodeMap;
	}

    @JsonProperty("originalCurrencyVo")
	public CurrencyVo getOriginalCurrencyVo() {
		return this.originalCurrencyVo;
	}
    @JsonProperty("originalCurrencyVo")
	public void setOriginalCurrencyVo(CurrencyVo originalCurrencyVo) {
		this.originalCurrencyVo = originalCurrencyVo;
	}

    @JsonProperty("domesticCurrencyVo")
	public CurrencyVo getDomesticCurrencyVo() {
		return this.domesticCurrencyVo;
	}
    @JsonProperty("domesticCurrencyVo")
	public void setDomesticCurrencyVo(CurrencyVo domesticCurrencyVo) {
		this.domesticCurrencyVo = domesticCurrencyVo;
	}

    @JsonProperty("isFinishPackageOrderCurrency")
	public Boolean getIsFinishPackageOrderCurrency() {
		return this.isFinishPackageOrderCurrency;
	}
    @JsonProperty("isFinishPackageOrderCurrency")
	public void setIsFinishPackageOrderCurrency(Boolean isFinishPackageOrderCurrency) {
		this.isFinishPackageOrderCurrency = isFinishPackageOrderCurrency;
	}

    @JsonProperty("isCalcPromotionBtn")
	public Boolean getIsCalcPromotionBtn() {
		if(this.isCalcPromotionBtn == null){
			return true;
        }
		return this.isCalcPromotionBtn;
	}
    @JsonProperty("isCalcPromotionBtn")
	public void setIsCalcPromotionBtn(Boolean isCalcPromotionBtn) {
		this.isCalcPromotionBtn = isCalcPromotionBtn;
	}

    @JsonProperty("isFinishPackageProductInfo")
	public Boolean getIsFinishPackageProductInfo() {
		return this.isFinishPackageProductInfo;
	}
    @JsonProperty("isFinishPackageProductInfo")
	public void setIsFinishPackageProductInfo(Boolean isFinishPackageProductInfo) {
		this.isFinishPackageProductInfo = isFinishPackageProductInfo;
	}

    @JsonProperty("showCoupons")
	public Boolean getShowCoupons() {
		return this.showCoupons;
	}
    @JsonProperty("showCoupons")
	public void setShowCoupons(Boolean showCoupons) {
		this.showCoupons = showCoupons;
	}

    @JsonProperty("showPoint")
	public Boolean getShowPoint() {
		return this.showPoint;
	}
    @JsonProperty("showPoint")
	public void setShowPoint(Boolean showPoint) {
		this.showPoint = showPoint;
	}

	@JsonProperty("markupDeails")
	public List<OrderDetailModelVo> getMarkupDeails() {
		return this.markupDeails;
	}
	
	@JsonProperty("markupDeails")
	public void setMarkupDeails(List<OrderDetailModelVo> markupDeails) {
		this.markupDeails = markupDeails;
	}
    @JsonProperty("submitEditing")
	public boolean getSubmitEditing() {
		return this.submitEditing;
	}
    @JsonProperty("submitEditing")
	public void setSubmitEditing(boolean submitEditing) {
		this.submitEditing = submitEditing;
	}

    @JsonProperty("bClearGiveaway")
	public boolean getClearGiveaway() {
		return this.bClearGiveaway;
	}
    @JsonProperty("bClearGiveaway")
	public void setClearGiveaway(boolean bClearGiveaway) {
		this.bClearGiveaway = bClearGiveaway;
	}

    @JsonProperty("rebateDiscountMoney")
	public BigDecimal getRebateDiscountMoney() {
		return this.rebateDiscountMoney;
	}
    @JsonProperty("rebateDiscountMoney")
	public void setRebateDiscountMoney(BigDecimal rebateDiscountMoney) {
		this.rebateDiscountMoney = rebateDiscountMoney;
	}

    @JsonProperty("rebateReturnProductMoney")
	public BigDecimal getRebateReturnProductMoney() {
		return this.rebateReturnProductMoney;
	}
    @JsonProperty("rebateReturnProductMoney")
	public void setRebateReturnProductMoney(BigDecimal rebateReturnProductMoney) {
		this.rebateReturnProductMoney = rebateReturnProductMoney;
	}

    @JsonProperty("promotionType")
	public String getPromotionType() {
		return this.promotionType;
	}
    @JsonProperty("promotionType")
	public void setPromotionType(String promotionType) {
		this.promotionType = promotionType;
	}

    @JsonProperty("isNeedCalcPromotion")
	public Boolean getIsNeedCalcPromotion() {
		if(this.isNeedCalcPromotion == null){
			return false;
        }
		return this.isNeedCalcPromotion;
	}
    @JsonProperty("isNeedCalcPromotion")
	public void setIsNeedCalcPromotion(Boolean isNeedCalcPromotion) {
		this.isNeedCalcPromotion = isNeedCalcPromotion;
	}

    @JsonProperty("isVerify")
	public Boolean getIsVerify() {
		return this.isVerify;
	}
    @JsonProperty("isVerify")
	public void setIsVerify(Boolean isVerify) {
		this.isVerify = isVerify;
	}

    @JsonProperty("pubuts")
	public LocalDateTime getPubuts() {
		return this.pubuts;
	}
    @JsonProperty("pubuts")
	public void setPubuts(LocalDateTime pubuts) {
		this.pubuts = pubuts;
	}

    @JsonProperty("unitExchangeTypePrice")
	public Integer getUnitExchangeTypePrice() {
		return this.unitExchangeTypePrice;
	}
    @JsonProperty("unitExchangeTypePrice")
	public void setUnitExchangeTypePrice(Integer unitExchangeTypePrice) {
		this.unitExchangeTypePrice = unitExchangeTypePrice;
	}

    @JsonProperty("unitExchangeType")
	public Integer getUnitExchangeType() {
		return this.unitExchangeType;
	}
    @JsonProperty("unitExchangeType")
	public void setUnitExchangeType(Integer unitExchangeType) {
		this.unitExchangeType = unitExchangeType;
	}

    @JsonProperty("isOnlyEditUserAddGiveaway")
	public Boolean getIsOnlyEditUserAddGiveaway() {
		return this.isOnlyEditUserAddGiveaway;
	}
    @JsonProperty("isOnlyEditUserAddGiveaway")
	public void setIsOnlyEditUserAddGiveaway(Boolean isOnlyEditUserAddGiveaway) {
		this.isOnlyEditUserAddGiveaway = isOnlyEditUserAddGiveaway;
	}

    @JsonProperty("needUpdatePreferentialNum")
	public Boolean getNeedUpdatePreferentialNum() {
		if(this.needUpdatePreferentialNum == null){
			return false;
        }
		return this.needUpdatePreferentialNum;
	}
    @JsonProperty("needUpdatePreferentialNum")
	public void setNeedUpdatePreferentialNum(Boolean needUpdatePreferentialNum) {
		this.needUpdatePreferentialNum = needUpdatePreferentialNum;
	}

    @JsonProperty("promotionVoucherVersion")
	public String getPromotionVoucherVersion() {
		return this.promotionVoucherVersion;
	}
    @JsonProperty("promotionVoucherVersion")
	public void setPromotionVoucherVersion(String promotionVoucherVersion) {
		this.promotionVoucherVersion = promotionVoucherVersion;
	}

    @JsonProperty("isAutoUseRebate")
	public Boolean getIsAutoUseRebate() {
		if(this.isAutoUseRebate == null){
			return false;
        }
		return this.isAutoUseRebate;
	}
    @JsonProperty("isAutoUseRebate")
	public void setIsAutoUseRebate(Boolean isAutoUseRebate) {
		this.isAutoUseRebate = isAutoUseRebate;
	}

	@JsonProperty("indispensablyPricingDimension")
	public List<String> getIndispensablyPricingDimension() {
		return this.indispensablyPricingDimension;
	}
	
	@JsonProperty("indispensablyPricingDimension")
	public void setIndispensablyPricingDimension(List<String> indispensablyPricingDimension) {
		this.indispensablyPricingDimension = indispensablyPricingDimension;
	}
    @JsonProperty("rebateFlag")
	public Boolean getRebateFlag() {
		if(this.rebateFlag == null){
			return true;
        }
		return this.rebateFlag;
	}
    @JsonProperty("rebateFlag")
	public void setRebateFlag(Boolean rebateFlag) {
		this.rebateFlag = rebateFlag;
	}

    @JsonProperty("receiveStoreId")
	public Long getReceiveStoreId() {
		return this.receiveStoreId;
	}
    @JsonProperty("receiveStoreId")
	public void setReceiveStoreId(Long receiveStoreId) {
		this.receiveStoreId = receiveStoreId;
	}

    @JsonProperty("receiveStoreName")
	public String getReceiveStoreName() {
		return this.receiveStoreName;
	}
    @JsonProperty("receiveStoreName")
	public void setReceiveStoreName(String receiveStoreName) {
		this.receiveStoreName = receiveStoreName;
	}

    @JsonProperty("receiveStoreCode")
	public String getReceiveStoreCode() {
		return this.receiveStoreCode;
	}
    @JsonProperty("receiveStoreCode")
	public void setReceiveStoreCode(String receiveStoreCode) {
		this.receiveStoreCode = receiveStoreCode;
	}

    @JsonProperty("voucher")
	public Voucher getVoucher() {
		return this.voucher;
	}
    @JsonProperty("voucher")
	public void setVoucher(Voucher voucher) {
		this.voucher = voucher;
	}

	@JsonProperty("downProductOrderDetailList")
	public List<OrderDetailVo> getDownProductOrderDetailList() {
		return this.downProductOrderDetailList;
	}
	
	@JsonProperty("downProductOrderDetailList")
	public void setDownProductOrderDetailList(List<OrderDetailVo> downProductOrderDetailList) {
		this.downProductOrderDetailList = downProductOrderDetailList;
	}
    @JsonProperty("srcBillId")
	public Long getSrcBillId() {
		return this.srcBillId;
	}
    @JsonProperty("srcBillId")
	public void setSrcBillId(Long srcBillId) {
		this.srcBillId = srcBillId;
	}

    @JsonProperty("sourceType")
	public String getSourceType() {
		return this.sourceType;
	}
    @JsonProperty("sourceType")
	public void setSourceType(String sourceType) {
		this.sourceType = sourceType;
	}

    @JsonProperty("srcBillNO")
	public String getSrcBillNO() {
		return this.srcBillNO;
	}
    @JsonProperty("srcBillNO")
	public void setSrcBillNO(String srcBillNO) {
		this.srcBillNO = srcBillNO;
	}

    @JsonProperty("srcBillName")
	public String getSrcBillName() {
		return this.srcBillName;
	}
    @JsonProperty("srcBillName")
	public void setSrcBillName(String srcBillName) {
		this.srcBillName = srcBillName;
	}

    @JsonProperty("receiveAgreementId")
	public Long getReceiveAgreementId() {
		return this.receiveAgreementId;
	}
    @JsonProperty("receiveAgreementId")
	public void setReceiveAgreementId(Long receiveAgreementId) {
		this.receiveAgreementId = receiveAgreementId;
	}

    @JsonProperty("isFlowCoreBill")
	public Boolean getIsFlowCoreBill() {
		return this.isFlowCoreBill;
	}
    @JsonProperty("isFlowCoreBill")
	public void setIsFlowCoreBill(Boolean isFlowCoreBill) {
		this.isFlowCoreBill = isFlowCoreBill;
	}

    @JsonProperty("bizFlow")
	public String getBizFlow() {
		return this.bizFlow;
	}
    @JsonProperty("bizFlow")
	public void setBizFlow(String bizFlow) {
		this.bizFlow = bizFlow;
	}

    @JsonProperty("bizFlow_name")
	public String getBizFlowName() {
		return this.bizFlow_name;
	}
    @JsonProperty("bizFlow_name")
	public void setBizFlowName(String bizFlow_name) {
		this.bizFlow_name = bizFlow_name;
	}

    @JsonProperty("bizFlow_version")
	public String getBizFlowVersion() {
		return this.bizFlow_version;
	}
    @JsonProperty("bizFlow_version")
	public void setBizFlowVersion(String bizFlow_version) {
		this.bizFlow_version = bizFlow_version;
	}

    @JsonProperty("contractCtrlType")
	public Short getContractCtrlType() {
		return this.contractCtrlType;
	}
    @JsonProperty("contractCtrlType")
	public void setContractCtrlType(Short contractCtrlType) {
		this.contractCtrlType = contractCtrlType;
	}

    @JsonProperty("isContractVerify")
	public Short getIsContractVerify() {
		return this.isContractVerify;
	}
    @JsonProperty("isContractVerify")
	public void setIsContractVerify(Short isContractVerify) {
		this.isContractVerify = isContractVerify;
	}

    @JsonProperty("srcbillType")
	public Short getSrcbillType() {
		return this.srcbillType;
	}
    @JsonProperty("srcbillType")
	public void setSrcbillType(Short srcbillType) {
		this.srcbillType = srcbillType;
	}

    @JsonProperty("stockName")
	public String getStockName() {
		return this.stockName;
	}
    @JsonProperty("stockName")
	public void setStockName(String stockName) {
		this.stockName = stockName;
	}

    @JsonProperty("allowModifyPrice")
	public Boolean getAllowModifyPrice() {
		return this.allowModifyPrice;
	}
    @JsonProperty("allowModifyPrice")
	public void setAllowModifyPrice(Boolean allowModifyPrice) {
		this.allowModifyPrice = allowModifyPrice;
	}

    @JsonProperty("purchaseNo")
	public String getPurchaseNo() {
		return this.purchaseNo;
	}
    @JsonProperty("purchaseNo")
	public void setPurchaseNo(String purchaseNo) {
		this.purchaseNo = purchaseNo;
	}

	

    @Override
    public String toString() {
        return super.toString();
    }
}
