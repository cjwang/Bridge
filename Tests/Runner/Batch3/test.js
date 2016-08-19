﻿Bridge.initAssembly("test", function ($asm, globals) {
    
    Bridge.define('Bridge.Test.Assert', {
        statics: {
            assert: null,
            async: function () {
                return Bridge.Test.Assert.assert.async();
            },
            areEqual: function (expected, actual) {
                Bridge.Test.Assert.assert.deepEqual(actual, expected);
            },
            areEqual$1: function (expected, actual, description) {
                Bridge.Test.Assert.assert.deepEqual(actual, expected, description);
            },
            areDeepEqual: function (expected, actual) {
                Bridge.Test.Assert.assert.deepEqual(actual, expected);
            },
            areDeepEqual$1: function (expected, actual, description) {
                Bridge.Test.Assert.assert.deepEqual(actual, expected, description);
            },
            areStrictEqual: function (expected, actual) {
                Bridge.Test.Assert.assert.strictEqual(actual, expected);
            },
            areStrictEqual$1: function (expected, actual, description) {
                Bridge.Test.Assert.assert.strictEqual(actual, expected, description);
            },
            areNotEqual: function (expected, actual) {
                Bridge.Test.Assert.assert.notDeepEqual(actual, expected);
            },
            areNotEqual$1: function (expected, actual, description) {
                Bridge.Test.Assert.assert.notDeepEqual(actual, expected, description);
            },
            areNotDeepEqual: function (expected, actual) {
                Bridge.Test.Assert.assert.notDeepEqual(actual, expected);
            },
            areNotDeepEqual$1: function (expected, actual, description) {
                Bridge.Test.Assert.assert.notDeepEqual(actual, expected, description);
            },
            areNotStrictEqual: function (expected, actual) {
                Bridge.Test.Assert.assert.notStrictEqual(actual, expected);
            },
            areNotStrictEqual$1: function (expected, actual, description) {
                Bridge.Test.Assert.assert.notStrictEqual(actual, expected, description);
            },
            true: function (condition) {
                Bridge.Test.Assert.assert.ok(condition);
            },
            true$1: function (condition, message) {
                Bridge.Test.Assert.assert.ok(condition, message);
            },
            false: function (condition) {
                Bridge.Test.Assert.assert.notOk(condition);
            },
            false$1: function (condition, message) {
                Bridge.Test.Assert.assert.notOk(condition, message);
            },
            fail: function () {
                Bridge.Test.Assert.assert.ok(false);
            },
            fail$1: function (message) {
                Bridge.Test.Assert.assert.notOk(true, message);
            },
            throws: function (block) {
                Bridge.Test.Assert.assert.throws(block, "");
            },
            throws$5: function (block, message) {
                Bridge.Test.Assert.assert.throws(block, message);
            },
            throws$6: function (T, block) {
                Bridge.Test.Assert.throws$7(T, block, "");
            },
            throws$7: function (T, block, message) {
                var actual = null;
                var expected = Bridge.getTypeName(T);
    
                try {
                    block();
                }
                catch (ex) {
                    ex = System.Exception.create(ex);
                    actual = Bridge.getTypeName(ex);
                }
    
                if (!Bridge.referenceEquals(actual, expected)) {
                    Bridge.Test.Assert.assert.equal(actual, expected, message);
                }
                else  {
                    Bridge.Test.Assert.assert.ok(true, message);
                }
            },
            throws$3: function (block, expected) {
                Bridge.Test.Assert.assert.throws(block, expected);
            },
            throws$4: function (block, expected, message) {
                Bridge.Test.Assert.assert.throws(block, expected, message);
            },
            throws$1: function (block, expected) {
                Bridge.Test.Assert.assert.throws(block, expected);
            },
            throws$2: function (block, expected, message) {
                Bridge.Test.Assert.assert.throws(block, expected, message);
            },
            null: function (anObject) {
                Bridge.Test.Assert.assert.ok(anObject == null);
            },
            null$1: function (anObject, message) {
                Bridge.Test.Assert.assert.ok(anObject == null, message);
            },
            notNull: function (anObject) {
                Bridge.Test.Assert.assert.notOk(anObject == null);
            },
            notNull$1: function (anObject, message) {
                Bridge.Test.Assert.assert.notOk(anObject == null, message);
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestFixture$1', function (T) { return {
        statics: {
            instanceFabric: null,
            fixtureFabric: Bridge.getDefaultValue(T),
            getFixtureFabric: function () {
                if (Bridge.Test.QUnit.TestFixture$1(T).fixtureFabric == null) {
                    Bridge.Test.QUnit.TestFixture$1(T).fixtureFabric = new T();
                }
    
                return Bridge.Test.QUnit.TestFixture$1(T).fixtureFabric;
            },
            setFixtureFabric: function (value) {
                Bridge.Test.QUnit.TestFixture$1(T).fixtureFabric = value;
            },
            instanceFabric$1: function (type) {
                if (Bridge.Test.QUnit.TestFixture$1(T).instanceFabric == null) {
                    Bridge.Test.QUnit.TestFixture$1(T).instanceFabric = Bridge.cast(Bridge.createInstance(type), Bridge.Test.QUnit.TestFixture$1(T));
                }
    
                return Bridge.Test.QUnit.TestFixture$1(T).instanceFabric;
            },
            beforeTest: function (needInstance, assert, type, expectedCount) {
                if (expectedCount === void 0) { expectedCount = null; }
                Bridge.Test.Assert.assert = assert;
    
                if (System.Nullable.hasValue(expectedCount)) {
                    assert.expect(System.Nullable.getValue(expectedCount));
                }
    
                var instance = Bridge.Test.QUnit.TestFixture$1(T).instanceFabric$1(type);
                instance.setFixture(needInstance ? Bridge.Test.QUnit.TestFixture$1(T).getFixtureFabric() : Bridge.getDefaultValue(T));
    
                try {
                    instance.setUp();
                }
                catch ($e1) {
                    $e1 = System.Exception.create($e1);
                    assert.ok(false, "The test failed SetUp");
    
                    throw $e1;
                }
    
                return instance;
            }
        },
        config: {
            properties: {
                Fixture: Bridge.getDefaultValue(T)
            }
        },
        setUp: function () {
        },
        tearDown: function () {
        }
    }; });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner', {
        statics: {
            config: {
                init: function () {
                    Bridge.ready(this.main);
                }
            },
            main: function () {
                QUnit.module("Issues3");
                QUnit.test("#69 - ThisKeywordInStructConstructorWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge069.thisKeywordInStructConstructorWorks);
                QUnit.test("#1000 - TestStaticViaChild", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1000.testStaticViaChild);
                QUnit.test("#1001 - TestDefaultValues", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1001.testDefaultValues);
                QUnit.test("#1003 - TestGenericLambdasToLifting", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1003.testGenericLambdasToLifting);
                QUnit.test("#1012 - TestSleepZero", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1012.testSleepZero);
                QUnit.test("#1012 - TestSleepInt", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1012.testSleepInt);
                QUnit.test("#1012 - TestSleepTimeSpan", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1012.testSleepTimeSpan);
                QUnit.test("#1012 - TestSleepThrows", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1012.testSleepThrows);
                QUnit.test("#1020 - TestFlagEnumWithReference", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1020.testFlagEnumWithReference);
                QUnit.test("#1020 - TestEnumWithReference", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1020.testEnumWithReference);
                QUnit.test("#1024 - TestConstructorOptionalParameter", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1024.testConstructorOptionalParameter);
                QUnit.test("#1025 - TestC1", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1025.testC1);
                QUnit.test("#1025 - TestC2", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1025.testC2);
                QUnit.test("#1025 - TestC3", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1025.testC3);
                QUnit.test("#1025 - TestI3", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1025.testI3);
                QUnit.test("#1025 - TestI4", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1025.testI4);
                QUnit.test("#1025 - TestI5", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1025.testI5);
                QUnit.test("#1025 - TestI6", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1025.testI6);
                QUnit.test("#1025 - TestI7", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1025.testI7);
                QUnit.test("#1025 - TestI8", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1025.testI8);
                QUnit.test("#1025 - TestI10", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1025.testI10);
                QUnit.test("#1025 - TestI10_1", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1025.testI10_1);
                QUnit.test("#1025 - TestI10_2", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1025.testI10_2);
                QUnit.test("#1025 - TestI11", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1025.testI11);
                QUnit.test("#1025 - TestI11_1", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1025.testI11_1);
                QUnit.test("#1026 - TestReservedWordIfRefOut", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1026.testReservedWordIfRefOut);
                QUnit.test("#1027 - TestNonBridgeInherits", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1027.testNonBridgeInherits);
                QUnit.test("#1029 - TestNullableMethods", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1029.testNullableMethods);
                QUnit.test("#1039 - TestMoreThanDecimalDigitsFromTotalHours", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1039.testMoreThanDecimalDigitsFromTotalHours);
                QUnit.test("#1041 - Decimal TestPropertyOps", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1041Decimal.testPropertyOps);
                QUnit.test("#1041 - Decimal TestIndexerOps", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1041Decimal.testIndexerOps);
                QUnit.test("#1041 - Decimal TestDictOps", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1041Decimal.testDictOps);
                QUnit.test("#1041 - Decimal TestVariableOps", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1041Decimal.testVariableOps);
                QUnit.test("#1041 - Integer TestPropertyOps", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1041Integer.testPropertyOps);
                QUnit.test("#1041 - Integer TestIndexerOps", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1041Integer.testIndexerOps);
                QUnit.test("#1041 - Integer TestDictOps", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1041Integer.testDictOps);
                QUnit.test("#1041 - Integer TestVariableOps", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1041Integer.testVariableOps);
                QUnit.test("#1051 - TestInlinePopertyWithValue", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1051.testInlinePopertyWithValue);
                QUnit.test("#1053 - TestFieldPropertyWithInterface", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1053.testFieldPropertyWithInterface);
                QUnit.test("#1058 - TestNameTrue", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1058.testNameTrue);
                QUnit.test("#1058 - TestNameFales", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1058.testNameFales);
                QUnit.test("#1059 - TestEnumNameModes", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1059.testEnumNameModes);
                QUnit.test("#1061 - TestIsDigitFromLinq", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1061.testIsDigitFromLinq);
                QUnit.test("#1065 - TestDecimalLongWithDictionary", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1065.testDecimalLongWithDictionary);
                QUnit.test("#1066 - TestInlinePopertyWithValue", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1066.testInlinePopertyWithValue);
                QUnit.test("#1067 - TestInlinePopertyWithValue", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1067.testInlinePopertyWithValue);
                QUnit.test("#1071 - TestParamsForCtor", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1071.testParamsForCtor);
                QUnit.test("#1172 - TestNameForProperty", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1072.testNameForProperty);
                QUnit.test("#1076 - TestInlineConstantAsMemberReference", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1076.testInlineConstantAsMemberReference);
                QUnit.test("#1076 - TestInlineBridgeNumericConstantsAsMemberReference", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1076.testInlineBridgeNumericConstantsAsMemberReference);
                QUnit.test("#1083 - TestExternalEnum", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1083.testExternalEnum);
                QUnit.test("#1085 - TestInlineArrayExpand", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1085.testInlineArrayExpand);
                QUnit.test("#1096 - TestClippingIssues", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1096.testClippingIssues);
                QUnit.test("#1098 - TestInlineConstantAsMemberReference", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1098.testInlineConstantAsMemberReference);
                QUnit.test("#1103 - TestPropertyOps", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1103.testPropertyOps);
                QUnit.test("#1105 - TestStaticInitForNestedClasses", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1105.testStaticInitForNestedClasses);
                QUnit.test("#1109 - TestTemplateOnProperty", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1109.testTemplateOnProperty);
                QUnit.test("#1110 - TestOverflowForConditionInParenthesized", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1110.testOverflowForConditionInParenthesized);
                QUnit.test("#1110 - TestOverflowForIndexer", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1110.testOverflowForIndexer);
                QUnit.test("#1110 - TestOverflowForBitwise", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1110.testOverflowForBitwise);
                QUnit.test("#1120 - TestEnumDoesNotGenerateValuesAsPowerOfTwo", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1120.testEnumDoesNotGenerateValuesAsPowerOfTwo);
                QUnit.test("#1120 - TestFlagEnumDoesNotGenerateValuesAsPowerOfTwo", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1120.testFlagEnumDoesNotGenerateValuesAsPowerOfTwo);
                QUnit.test("#1128 - TestNestedClassesWithInterface", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1128.testNestedClassesWithInterface);
                QUnit.test("#1130 - TestUlongDivision", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1130.testUlongDivision);
                QUnit.test("#1134 - TestJsonArrayParse", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1134.testJsonArrayParse);
                QUnit.test("#1140 - TestDefaultNullable", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1140.testDefaultNullable);
                QUnit.test("#1141 - TestLongDivisionInfiniteLoopFixed", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1141.testLongDivisionInfiniteLoopFixed);
                QUnit.test("#1144 - TestStringFormat", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1144.testStringFormat);
                QUnit.test("#1146 - TestLongIssues", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1146.testLongIssues);
                QUnit.test("#1149 - TestBitwiseOrAnd", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1149.testBitwiseOrAnd);
                QUnit.test("#1160 - TestBitwiseOrAnd", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1160.testBitwiseOrAnd);
                QUnit.test("#1170 - TestAsyncUsing", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1170.testAsyncUsing);
                QUnit.test("#1170 - TestAsyncUsingWithException", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1170.testAsyncUsingWithException);
                QUnit.test("#1171 - TestLinqEnumerableInList", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1171.testLinqEnumerableInList);
                QUnit.test("#1175 - TestNullComparing", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1175.testNullComparing);
                QUnit.test("#1176 - TestFunctionLifting", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1176.testFunctionLifting);
                QUnit.test("#1177 - TestImplicitCast", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1177.testImplicitCast);
                QUnit.test("#1180 - TestStructClone", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1180.testStructClone);
                QUnit.test("#1184 - TestGetTypeForNumberTypes", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1184.testGetTypeForNumberTypes);
                QUnit.test("#1186 - TestLambdasInField", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1186.testLambdasInField);
                QUnit.test("#1189 - TestTaskNumber", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1189.testTaskNumber);
                QUnit.test("#1197 - TestGetHashCodeOnDictionary", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1197.testGetHashCodeOnDictionary);
                QUnit.test("#1199 - TestEventNameCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1199.testEventNameCase);
                QUnit.test("#1202 - TestRefOutStaticIntField", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1202.testRefOutStaticIntField);
                QUnit.test("#1202 - TestRefOutLocal1DIntArray", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1202.testRefOutLocal1DIntArray);
                QUnit.test("#1202 - TestRefOutStatic1DIntArray", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1202.testRefOutStatic1DIntArray);
                QUnit.test("#1202 - TestRefOutLocal2DIntArray", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1202.testRefOutLocal2DIntArray);
                QUnit.test("#1202 - TestRefOutStaticDecimalField", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1202.testRefOutStaticDecimalField);
                QUnit.test("#1202 - TestRefOutLocal1DDecimalArray", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1202.testRefOutLocal1DDecimalArray);
                QUnit.test("#1202 - TestRefOutLocal2DDecimalArray", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1202.testRefOutLocal2DDecimalArray);
                QUnit.test("#1202 - TestInlineOutStaticIntField", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1202.testInlineOutStaticIntField);
                QUnit.test("#1202 - TestInlineOutStatic1DIntArray", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1202.testInlineOutStatic1DIntArray);
                QUnit.test("#1202 - TestInlineOutLocal2DIntArray", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1202.testInlineOutLocal2DIntArray);
                QUnit.test("#1203 - TestLiftedFunctionsInsideInitMethod", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1203.testLiftedFunctionsInsideInitMethod);
                QUnit.test("#1206 - TestDocumentURLProperty", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1206.testDocumentURLProperty);
                QUnit.test("#1217 - TestTypeInferenceWithNamedArguments", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1217.testTypeInferenceWithNamedArguments);
                QUnit.test("#1219 - TestLongJSON", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1219.testLongJSON);
                QUnit.test("#122 - Test2DArrayConstruction", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge122.test2DArrayConstruction);
                QUnit.test("#1220 - TestConstInGenericClass", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1220.testConstInGenericClass);
                QUnit.test("#1226 - TestSinh", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1226.testSinh);
                QUnit.test("#1226 - TestCosh", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1226.testCosh);
                QUnit.test("#1226 - TestTanh", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1226.testTanh);
                QUnit.test("#1231 - TestAutoGeneratedStructMethodName", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1231.testAutoGeneratedStructMethodName);
                QUnit.test("#1232 - TestParamsInThisCtorInit", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1232.testParamsInThisCtorInit);
                QUnit.test("#1232 - TestExtendedParamsInThisCtorInit", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1232.testExtendedParamsInThisCtorInit);
                QUnit.test("#1241 - TestMarkElement", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1241.testMarkElement);
                QUnit.test("#1249 - TestEnumOverflow", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1249.testEnumOverflow);
                QUnit.test("#1253 - TestDefaultEnumMode", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1253.testDefaultEnumMode);
                QUnit.test("#1256 - TestCaseBooleanIsLet", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1256.testCaseBooleanIsLet);
                QUnit.test("#1256 - TestReservedFields", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1256.testReservedFields);
                QUnit.test("#1256 - TestReservedMethods", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1256.testReservedMethods);
                QUnit.test("#1260 - TestStringTrim", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1260.testStringTrim);
                QUnit.test("#1260 - TestStringTrimStart", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1260.testStringTrimStart);
                QUnit.test("#1260 - TestStringTrimEnd", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1260.testStringTrimEnd);
                QUnit.test("#1264 - TestDefaultGetHashCodeIsRepeatable", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1264.testDefaultGetHashCodeIsRepeatable);
                QUnit.test("#1266 - TestArrayToEnumerable", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1266.testArrayToEnumerable);
                QUnit.test("#1296 - TestImplicitOperator", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1296.testImplicitOperator);
                QUnit.test("#1296 - TestIgnoreCast", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1296.testIgnoreCast);
                QUnit.test("#1296 - TestExternalImplicit", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1296.testExternalImplicit);
                QUnit.test("#1298 - TestLongSwitch", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1298.testLongSwitch);
                QUnit.test("#1304 - TestWriteFormatString", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1304.testWriteFormatString);
                QUnit.test("#1304 - TestWriteLineFormatString", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1304.testWriteLineFormatString);
                QUnit.test("#1305 - TestAsyncIntReturnWithAssigmentFromResult", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1305.testAsyncIntReturnWithAssigmentFromResult);
                QUnit.test("#1305 - TestAsyncDataClassReturnWithAssigmentFromResult", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1305.testAsyncDataClassReturnWithAssigmentFromResult);
                QUnit.test("#1305 - TestAsyncDataStructReturnWithAssigmentFromResult", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1305.testAsyncDataStructReturnWithAssigmentFromResult);
                QUnit.test("#1311 - TestEnumNumberParsing", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1311.testEnumNumberParsing);
                QUnit.test("#1313 - TestInterfaceDefaultParameter", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1313.testInterfaceDefaultParameter);
                QUnit.test("#1313 - TestClassNotDefaultParameter", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1313.testClassNotDefaultParameter);
                QUnit.test("#1316 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1316.testUseCase);
                QUnit.test("#1316 - TestStringConcatObject", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1316.testStringConcatObject);
                QUnit.test("#1316 - TestStringConcatEnumerableString", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1316.testStringConcatEnumerableString);
                QUnit.test("#1316 - TestStringConcatEnumerableGeneric", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1316.testStringConcatEnumerableGeneric);
                QUnit.test("#1328 - TestOptionalParamsForClasses", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1328.testOptionalParamsForClasses);
                QUnit.test("#1328 - TestOptionalParamsForStructs", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1328.testOptionalParamsForStructs);
                QUnit.test("#1339 - TestAccessingConstantsFromDerivedClass", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1339.testAccessingConstantsFromDerivedClass);
                QUnit.test("#1340 - TestStructGenericMembersDefaultValue", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1340.testStructGenericMembersDefaultValue);
                QUnit.test("#1340 - TestStructTwoGenericMembersDefaultValue", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1340.testStructTwoGenericMembersDefaultValue);
                QUnit.test("#1340 - TestClassGenericMembersDefaultValue", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1340.testClassGenericMembersDefaultValue);
                QUnit.test("#1340 - TestClassTwoGenericMembersDefaultValue", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1340.testClassTwoGenericMembersDefaultValue);
                QUnit.test("#1340 - TestClass1TwoGenericInheritedMembersDefaultValue", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1340.testClass1TwoGenericInheritedMembersDefaultValue);
                QUnit.test("#1340 - TestClass2TwoGenericInheritedMembersDefaultValue", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1340.testClass2TwoGenericInheritedMembersDefaultValue);
                QUnit.test("#1340 - TestClass3TwoGenericInheritedMembersDefaultValue", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1340.testClass3TwoGenericInheritedMembersDefaultValue);
                QUnit.test("#1340 - TestStructStaticIntArray", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1340.testStructStaticIntArray);
                QUnit.test("#1340 - TestStructStaticLongArray", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1340.testStructStaticLongArray);
                QUnit.test("#1340 - TestStructStaticStringArray", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1340.testStructStaticStringArray);
                QUnit.test("#1340 - TestStaticClassGenericMembersDefaultValue", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1340.testStaticClassGenericMembersDefaultValue);
                QUnit.test("#1340 - TestStaticClassTwoGenericMembersDefaultValue", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1340.testStaticClassTwoGenericMembersDefaultValue);
                QUnit.test("#1340 - TestStaticClass1TwoGenericInheritedMembersDefaultValue", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1340.testStaticClass1TwoGenericInheritedMembersDefaultValue);
                QUnit.test("#1340 - TestStaticClass2TwoGenericInheritedMembersDefaultValue", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1340.testStaticClass2TwoGenericInheritedMembersDefaultValue);
                QUnit.test("#1340 - TestStaticClass3TwoGenericInheritedMembersDefaultValue", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1340.testStaticClass3TwoGenericInheritedMembersDefaultValue);
                QUnit.test("#1341 - TestPlainObject", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1341.testPlainObject);
                QUnit.test("#1341 - TestAnonymousTypeCreation", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1341.testAnonymousTypeCreation);
                QUnit.test("#1341 - TestDiffStructHashCode", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1341.testDiffStructHashCode);
                QUnit.test("#1341 - TestDiffAnonymousTypesHashCode", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1341.testDiffAnonymousTypesHashCode);
                QUnit.test("#1341 - Test1AnonymousType", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1341.test1AnonymousType);
                QUnit.test("#1341 - Test2AnonymousType", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1341.test2AnonymousType);
                QUnit.test("#1341 - Test3AnonymousType", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1341.test3AnonymousType);
                QUnit.test("#1341 - Test4AnonymousType", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1341.test4AnonymousType);
                QUnit.test("#1341 - Test5AnonymousType", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1341.test5AnonymousType);
                QUnit.test("#1343 - TestDoubleTemplate", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1343.testDoubleTemplate);
                QUnit.test("#1343 - TestInlineInGetHashCode", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1343.testInlineInGetHashCode);
                QUnit.test("#1344 - TestLocalVariableWithNameProto", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1344.testLocalVariableWithNameProto);
                QUnit.test("#1348 - TestVoidTypeOf", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1348.testVoidTypeOf);
                QUnit.test("#1355 - TestLocalVariableWithNameWindow", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1355.testLocalVariableWithNameWindow);
                QUnit.test("#1374 - TestConvertAllForIntListStaticMethod", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1374.testConvertAllForIntListStaticMethod);
                QUnit.test("#1374 - TestConvertAllForIntListInstanceMethod", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1374.testConvertAllForIntListInstanceMethod);
                QUnit.test("#1374 - TestConvertAllForIntListLambda", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1374.testConvertAllForIntListLambda);
                QUnit.test("#1374 - TestConvertAllForNullConverter", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1374.testConvertAllForNullConverter);
                QUnit.test("#1374 - TestConvertAllForNullArray", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1374.testConvertAllForNullArray);
                QUnit.test("#1378 - TestAssigmentWithMinusOperator", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1378.testAssigmentWithMinusOperator);
                QUnit.test("#1378 - TestAssigmentWithPlusOperator", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1378.testAssigmentWithPlusOperator);
                QUnit.test("#1378 - TestAssigmentWithOverloadMinusOperator", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1378.testAssigmentWithOverloadMinusOperator);
                QUnit.test("#1378 - TestAssigmentWithOverloadPlusOperator", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1378.testAssigmentWithOverloadPlusOperator);
                QUnit.test("#1378 - TestAssigmentWithConditionalPlusOperator", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1378.testAssigmentWithConditionalPlusOperator);
                QUnit.test("#1378 - TestAssigmentWithConditionalMinusOperator", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1378.testAssigmentWithConditionalMinusOperator);
                QUnit.test("#1379 - TestNanFiniteType", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1379.testNanFiniteType);
                QUnit.test("#1385 - TestIsTypedArray", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1385.testIsTypedArray);
                QUnit.test("#1389 - TestParamsIndexer", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1389.testParamsIndexer);
                QUnit.test("#1391 - TestStaticCtorOrder", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1391.testStaticCtorOrder);
                QUnit.test("#1391 - TestStaticCtorOrderForClassHavingReady", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1391Ready.testStaticCtorOrderForClassHavingReady);
                QUnit.test("#1402 - TestLongClipping", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1402.testLongClipping);
                QUnit.test("#1410 - TestSetterOnly", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1410.testSetterOnly);
                QUnit.test("#1410 - TestIndexer", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1410.testIndexer);
                QUnit.test("#1410 - TestAssigmentWithOp", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1410.testAssigmentWithOp);
                QUnit.test("#1411 - TestTemplateCtorThing", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1411.testTemplateCtorThing);
                QUnit.test("#1411 - TestTemplateCtorDoodad", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1411.testTemplateCtorDoodad);
                QUnit.test("#1411 - TestTemplateCtorGizmo", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1411.testTemplateCtorGizmo);
                QUnit.test("#1428 - TestEqOperatorWithNull", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1428.testEqOperatorWithNull);
                QUnit.test("#1429 - TestEqOperatorWithNull", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1429.testEqOperatorWithNull);
                QUnit.test("#1438 - TestJSONParse", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1438.testJSONParse);
                QUnit.test("#1438 - TestJSONParseAsArray", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1438.testJSONParseAsArray);
                QUnit.test("#1448 - TestPlainForNonAnonymous", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1448.testPlainForNonAnonymous);
                QUnit.test("#1448 - TestObjectLiteralProperty", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1448.testObjectLiteralProperty);
                QUnit.test("#1448 - TestToObjectLiteralAlias", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1448.testToObjectLiteralAlias);
                QUnit.test("#1459 - TestHtmlElements", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1459.testHtmlElements);
                QUnit.test("#1467 - TestForeachTypeChecking", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1467.testForeachTypeChecking);
                QUnit.test("#1476 - TestEscapedBrackets", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1476.testEscapedBrackets);
                QUnit.test("#1480 - TestOverloadUnaryOperator", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1480.testOverloadUnaryOperator);
                QUnit.test("#1485 - TestConstructorName", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1485.testConstructorName);
                QUnit.test("#1486 - TestConstructorName", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1486.testConstructorName);
                QUnit.test("#1501 - TestPropertyChangedEventArgs", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1501.testPropertyChangedEventArgs);
                QUnit.test("#1653 - TestLiftedFunctionsWithGenericInvocation", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1653.testLiftedFunctionsWithGenericInvocation);
                QUnit.test("#381 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge381.testUseCase);
                QUnit.test("#447 - CheckInlineExpression", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge447.checkInlineExpression);
                QUnit.test("#447 - CheckInlineCalls", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge447.checkInlineCalls);
                QUnit.test("#472 - Test", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge472.test);
                QUnit.test("#479 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge479.testUseCase);
                QUnit.test("#485 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge485.testUseCase);
                QUnit.test("#495 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge495.testUseCase);
                QUnit.test("#501 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge501.testUseCase);
                QUnit.test("#502 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge502.testUseCase);
                QUnit.test("#503 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge503.testUseCase);
                QUnit.test("#508 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge508.testUseCase);
                QUnit.test("#514 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge514.testUseCase);
                QUnit.test("#514 - TestRelated", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge514.testRelated);
                QUnit.test("#520 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge520.testUseCase);
                QUnit.test("#522 - TestUseCase1", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge522.testUseCase1);
                QUnit.test("#522 - TestUseCase2", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge522.testUseCase2);
                QUnit.test("#532 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge532.testUseCase);
                QUnit.test("#537 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge537.testUseCase);
                QUnit.test("#538 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge538.testUseCase);
                QUnit.test("#544 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge544.testUseCase);
                QUnit.test("#544 - TestRelated", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge544.testRelated);
                QUnit.test("#546 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge546.testUseCase);
                QUnit.test("#546 - TestRelated", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge546.testRelated);
                QUnit.test("#548 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge548.testUseCase);
                QUnit.test("#549 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge549.testUseCase);
                QUnit.test("#550 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge550.testUseCase);
                QUnit.test("#554 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge554.testUseCase);
                QUnit.test("#555 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge555.testUseCase);
                QUnit.test("#558 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge558.testUseCase);
                QUnit.test("#559 - TestUseCase1", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge559.testUseCase1);
                QUnit.test("#559 - TestUseCase2", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge559.testUseCase2);
                QUnit.test("#559 - TestUseCase3", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge559.testUseCase3);
                QUnit.test("#563 - TesForeach", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge563.tesForeach);
                QUnit.test("#563 - TesFor", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge563.tesFor);
                QUnit.test("#566 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge566.testUseCase);
                QUnit.test("#572 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge572.testUseCase);
                QUnit.test("#577 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge577.testUseCase);
                QUnit.test("#578 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge578.testUseCase);
                QUnit.test("#580 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge580.testUseCase);
                QUnit.test("#582 - TestAddTimeSpan", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge582.testAddTimeSpan);
                QUnit.test("#582 - TestAddTicks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge582.testAddTicks);
                QUnit.test("#582 - TestTicks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge582.testTicks);
                QUnit.test("#582 - TestSubtractTimeSpan", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge582.testSubtractTimeSpan);
                QUnit.test("#582 - TestTimeOfDay", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge582.testTimeOfDay);
                QUnit.test("#583 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge583.testUseCase);
                QUnit.test("#586 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge586.testUseCase);
                QUnit.test("#588 - TestUseCase1", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge588.testUseCase1);
                QUnit.test("#588 - TestUseCase2", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge588C.testUseCase2);
                QUnit.test("#592 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge592.testUseCase);
                QUnit.test("#595 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge595.testUseCase);
                QUnit.test("#597 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge597.testUseCase);
                QUnit.test("#603 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge603.testUseCase);
                QUnit.test("#603 - TestRelated", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge603.testRelated);
                QUnit.test("#606 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge606.testUseCase);
                QUnit.test("#607 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge607.testUseCase);
                QUnit.test("#608 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge608.testUseCase);
                QUnit.test("#615 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge615.testUseCase);
                QUnit.test("#623 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge623.testUseCase);
                QUnit.test("#625 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge625.testUseCase);
                QUnit.test("#634 - TestUseCase2", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge634.testUseCase2);
                QUnit.test("#635 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge635.testUseCase);
                QUnit.test("#637 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge637.testUseCase);
                QUnit.test("#647 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge647.testUseCase);
                QUnit.test("#648 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge648.testUseCase);
                QUnit.test("#652 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge652.testUseCase);
                QUnit.test("#655 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge655.testUseCase);
                QUnit.test("#658 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge658.testUseCase);
                QUnit.test("#660 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge660.testUseCase);
                QUnit.test("#661 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge661.testUseCase);
                QUnit.test("#664 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge664.testUseCase);
                QUnit.test("#666 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge666.testUseCase);
                QUnit.test("#671 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge671.testUseCase);
                QUnit.test("#674 - TestUndefinedToReferenceType", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge674.testUndefinedToReferenceType);
                QUnit.test("#674 - TestUndefinedToValueType", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge674.testUndefinedToValueType);
                QUnit.test("#675 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge675.testUseCase);
                QUnit.test("#687 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge687.testUseCase);
                QUnit.test("#689 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge689.testUseCase);
                QUnit.test("#690 - TestUseCaseForInstance", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge690.testUseCaseForInstance);
                QUnit.test("#690 - TestUseCaseForStatic", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge690.testUseCaseForStatic);
                QUnit.test("#691 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge691.testUseCase);
                QUnit.test("#692 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge692.testUseCase);
                QUnit.test("#693 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge693.testUseCase);
                QUnit.test("#694 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge694.testUseCase);
                QUnit.test("#696 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge696.testUseCase);
                QUnit.test("#699 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge699.testUseCase);
                QUnit.test("#708 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge708.testUseCase);
                QUnit.test("#721 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge721.testUseCase);
                QUnit.test("#722 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge722.testUseCase);
                QUnit.test("#726 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge726.testUseCase);
                QUnit.test("# 732- TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge732.testUseCase);
                QUnit.test("#733 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge733.testUseCase);
                QUnit.test("#743 - TestInlineMethodsAsReference", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge743.testInlineMethodsAsReference);
                QUnit.test("#751 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge751.testUseCase);
                QUnit.test("#758 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge758.testUseCase);
                QUnit.test("#760 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge760.testUseCase);
                QUnit.test("#762 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge762.testUseCase);
                QUnit.test("#772 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge772.testUseCase);
                QUnit.test("#777 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge777.testUseCase);
                QUnit.test("#782 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge782.testUseCase);
                QUnit.test("#785 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge785.testUseCase);
                QUnit.test("#786 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge786.testUseCase);
                QUnit.test("#788 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge788.testUseCase);
                QUnit.test("#789 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge789.testUseCase);
                QUnit.test("#793 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge793.testUseCase);
                QUnit.test("#795 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge795.testUseCase);
                QUnit.test("#795 - TestRelated", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge795.testRelated);
                QUnit.test("#796 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge796.testUseCase);
                QUnit.test("#815 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge815.testUseCase);
                QUnit.test("#816 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge816.testUseCase);
                QUnit.test("#817 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge817.testUseCase);
                QUnit.test("#818 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge818.testUseCase);
                QUnit.test("#821 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge821.testUseCase);
                QUnit.test("#823 - GetTicksReturnsCorrectValue", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge823.getTicksReturnsCorrectValue);
                QUnit.test("#826 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge826.testUseCase);
                QUnit.test("#830 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge830.testUseCase);
                QUnit.test("#835 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge835.testUseCase);
                QUnit.test("#841 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge841.testUseCase);
                QUnit.test("#844 - NullableAndSimpleDateTimeToStringEquals", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge844.nullableAndSimpleDateTimeToStringEquals);
                QUnit.test("#849 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge849.testUseCase);
                QUnit.test("#857 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge857.testUseCase);
                QUnit.test("#861 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge861.testUseCase);
                QUnit.test("#863 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge863.testUseCase);
                QUnit.test("#874 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge874.testUseCase);
                QUnit.test("#881 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge881.testUseCase);
                QUnit.test("#882 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge882.testUseCase);
                QUnit.test("#883 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge883.testUseCase);
                QUnit.test("#889 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge889.testUseCase);
                QUnit.test("#889 - TestMakeEnumerable", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge889.testMakeEnumerable);
                QUnit.test("#892 - TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge892.testUseCase);
                QUnit.test("#893 - EnumToStringWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge893.enumToStringWorks);
                QUnit.test("#898 - TestDecimalConversion", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge898.testDecimalConversion);
                QUnit.test("#898 - TestDoubleConversion", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge898.testDoubleConversion);
                QUnit.test("#905 - DayOfWeekFixed", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge905.dayOfWeekFixed);
                QUnit.test("#906 - TestIfAsyncMethod", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge906.testIfAsyncMethod);
                QUnit.test("#906 - TestIfElseAsyncMethod", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge906.testIfElseAsyncMethod);
                QUnit.test("#907 - TestStringSpitWithNullParameterFixed", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge907.testStringSpitWithNullParameterFixed);
                QUnit.test("#912 - TestAsyncMethodInBlock", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge912.testAsyncMethodInBlock);
                QUnit.test("#913 - TestNullableDateTimeGreaterThanWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge913.testNullableDateTimeGreaterThanWorks);
                QUnit.test("#918 - TestDynamicAsyncResult", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge918.testDynamicAsyncResult);
                QUnit.test("#922 - TestLinqDecimal", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge922.testLinqDecimal);
                QUnit.test("#928 - TestAsyncMethod", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge928.testAsyncMethod);
                QUnit.test("#929 - TestAsyncException", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge929.testAsyncException);
                QUnit.test("#930 - TestAsyncException", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge930.testAsyncException);
                QUnit.test("#933 - TestBooleanInIfStatement", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge933.testBooleanInIfStatement);
                QUnit.test("#952 - TestDoubleMinValue", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge952.testDoubleMinValue);
                QUnit.test("#968 - TestDecimalDoesNotParseIncorrectValue", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge968.testDecimalDoesNotParseIncorrectValue);
                QUnit.test("#968 - TestDecimalParsesCorrectValues", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge968.testDecimalParsesCorrectValues);
                QUnit.test("#975 - TestCastToLongWorksForBigNumberInIE", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge975.testCastToLongWorksForBigNumberInIE);
                QUnit.test("#989 - DateTimeToISOStringWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge989.dateTimeToISOStringWorks);
                QUnit.test("#989 - DateToISOStringWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge989.dateToISOStringWorks);
                QUnit.test("#991 - TestMultiplyAssignment", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge991.testMultiplyAssignment);
                QUnit.test("#997 - TestConvertAllForIntList", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge997.testConvertAllForIntList);
                QUnit.test("#997 - TestConvertAllForNullConverter", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge997.testConvertAllForNullConverter);
                QUnit.test("#999 - TestNestedLambdasToLifting", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge999.testNestedLambdasToLifting);
                QUnit.test("#999 - TestNestedLambdasToLiftingInForeach", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge999_1.testNestedLambdasToLiftingInForeach);
                QUnit.test("#1122 - TestClippingInDefaultOverflowMode", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_N1122.testClippingInDefaultOverflowMode);
                QUnit.test("#1122 - TestIntegerDivisionInDefaultMode", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_N1122.testIntegerDivisionInDefaultMode);
                QUnit.test("#1122 - TestInfinityCastDefaultOverflowMode", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_N1122.testInfinityCastDefaultOverflowMode);
                QUnit.test("#1122 - TestInfinityCastWithNullable1DefaultOverflowMode", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_N1122.testInfinityCastWithNullable1DefaultOverflowMode);
                QUnit.test("#1122 - TestInfinityCastWithNullable2DefaultOverflowMode", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_N1122.testInfinityCastWithNullable2DefaultOverflowMode);
                QUnit.test("#169", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues.n169);
                QUnit.test("#240", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues.n240);
                QUnit.test("#264", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues.n264);
                QUnit.test("#266", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues.n266);
                QUnit.test("#272", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues.n272);
                QUnit.test("#273", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues.n273);
                QUnit.test("#277", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues.n277);
                QUnit.test("#294", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues.n294);
                QUnit.test("#304", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues.n304);
                QUnit.test("#305", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues.n305);
                QUnit.test("#306", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues.n306);
                QUnit.test("#329", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues.n329);
                QUnit.test("#335", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues.n335);
                QUnit.test("#336", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues.n336);
                QUnit.test("#337", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues.n337);
                QUnit.test("#338", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues.n338);
                QUnit.test("#339", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues.n339);
                QUnit.test("#340", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues.n340);
                QUnit.test("#341", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues.n341);
                QUnit.test("#342", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues.n342);
                QUnit.test("#349", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues.n349);
                QUnit.test("#377", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues.n377);
                QUnit.test("#383", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues.n383);
                QUnit.test("#393", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues.n393);
                QUnit.test("#395", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues.n395);
                QUnit.test("#406", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues.n406);
                QUnit.test("#407", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues.n407);
                QUnit.test("#409", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues.n409);
                QUnit.test("#410", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues.n410);
                QUnit.test("#418", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues.n418);
                QUnit.test("#422", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues.n422);
                QUnit.test("#428", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues.n428);
                QUnit.test("#435", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues.n435);
                QUnit.test("#436", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues.n436);
                QUnit.test("#438", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues.n438);
                QUnit.test("#439", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues.n439);
                QUnit.test("#442", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues.n442);
                QUnit.test("#460", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues.n460);
                QUnit.test("#467", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues.n467);
                QUnit.test("#469", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues.n469);
                QUnit.test("#470", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues.n470);
                QUnit.test("#499", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues.n499);
            }
        },
        $entryPoint: true
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge069', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge069)],
        statics: {
            thisKeywordInStructConstructorWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge069).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge069, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge069.thisKeywordInStructConstructorWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1000', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1000)],
        statics: {
            testStaticViaChild: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1000).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1000, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1000.testStaticViaChild();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1001', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1001)],
        statics: {
            testDefaultValues: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1001).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1001, 4);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1001.testDefaultValues();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1003', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1003)],
        statics: {
            testGenericLambdasToLifting: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1003).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1003, 3);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1003.testGenericLambdasToLifting();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1012', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1012)],
        statics: {
            testSleepZero: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1012).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1012, 2);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1012.testSleepZero();
            },
            testSleepInt: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1012).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1012, 2);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1012.testSleepInt();
            },
            testSleepTimeSpan: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1012).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1012, 2);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1012.testSleepTimeSpan();
            },
            testSleepThrows: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1012).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1012, 3);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1012.testSleepThrows();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1020', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1020)],
        statics: {
            testFlagEnumWithReference: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1020).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1020, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1020.testFlagEnumWithReference();
            },
            testEnumWithReference: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1020).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1020, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1020.testEnumWithReference();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1024', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1024)],
        statics: {
            testConstructorOptionalParameter: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1024).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1024, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1024.testConstructorOptionalParameter();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1025', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025)],
        statics: {
            testC1: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1025);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.testC1();
            },
            testC2: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1025);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.testC2();
            },
            testC3: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1025);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.testC3();
            },
            testI3: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1025);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.testI3();
            },
            testI4: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1025);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.testI4();
            },
            testI5: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1025);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.testI5();
            },
            testI6: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1025);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.testI6();
            },
            testI7: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1025);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.testI7();
            },
            testI8: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1025);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.testI8();
            },
            testI10: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1025);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.testI10();
            },
            testI10_1: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1025);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.testI10_1();
            },
            testI10_2: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1025);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.testI10_2();
            },
            testI11: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1025);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.testI11();
            },
            testI11_1: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1025);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.testI11_1();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1026', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1026)],
        statics: {
            testReservedWordIfRefOut: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1026).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1026, 3);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1026.testReservedWordIfRefOut();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1027', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1027)],
        statics: {
            testNonBridgeInherits: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1027).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1027);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1027.testNonBridgeInherits();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1029', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1029)],
        statics: {
            testNullableMethods: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1029).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1029, 6);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1029.testNullableMethods();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1039', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1039)],
        statics: {
            testMoreThanDecimalDigitsFromTotalHours: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1039).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1039, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1039.testMoreThanDecimalDigitsFromTotalHours();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1041Decimal', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal)],
        statics: {
            testPropertyOps: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1041Decimal, 24);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.testPropertyOps();
            },
            testIndexerOps: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1041Decimal, 24);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.testIndexerOps();
            },
            testDictOps: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1041Decimal, 24);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.testDictOps();
            },
            testVariableOps: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1041Decimal, 24);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.testVariableOps();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1041Integer', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer)],
        statics: {
            testPropertyOps: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1041Integer, 12);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer.testPropertyOps();
            },
            testIndexerOps: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1041Integer, 12);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer.testIndexerOps();
            },
            testDictOps: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1041Integer, 12);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer.testDictOps();
            },
            testVariableOps: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1041Integer, 12);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer.testVariableOps();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1051', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1051)],
        statics: {
            testInlinePopertyWithValue: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1051).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1051);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1051.testInlinePopertyWithValue();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1053', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1053)],
        statics: {
            testFieldPropertyWithInterface: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1053).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1053);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1053.testFieldPropertyWithInterface();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1058', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1058)],
        statics: {
            testNameTrue: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1058).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1058);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1058.testNameTrue();
            },
            testNameFales: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1058).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1058);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1058.testNameFales();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1059', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1059)],
        statics: {
            testEnumNameModes: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1059).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1059);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1059.testEnumNameModes();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1061', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1061)],
        statics: {
            testIsDigitFromLinq: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1061).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1061);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1061.testIsDigitFromLinq();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1065', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1065)],
        statics: {
            testDecimalLongWithDictionary: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1065).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1065);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1065.testDecimalLongWithDictionary();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1066', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1066)],
        statics: {
            testInlinePopertyWithValue: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1066).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1066);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1066.testInlinePopertyWithValue();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1067', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1067)],
        statics: {
            testInlinePopertyWithValue: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1067).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1067);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1067.testInlinePopertyWithValue();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1071', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1071)],
        statics: {
            testParamsForCtor: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1071).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1071);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1071.testParamsForCtor();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1072', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1072)],
        statics: {
            testNameForProperty: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1072).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1072);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1072.testNameForProperty();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1076', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1076)],
        statics: {
            testInlineConstantAsMemberReference: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1076).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1076);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1076.testInlineConstantAsMemberReference();
            },
            testInlineBridgeNumericConstantsAsMemberReference: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1076).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1076);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1076.testInlineBridgeNumericConstantsAsMemberReference();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1083', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1083)],
        statics: {
            testExternalEnum: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1083).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1083);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1083.testExternalEnum();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1085', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1085)],
        statics: {
            testInlineArrayExpand: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1085).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1085);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1085.testInlineArrayExpand();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1096', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1096)],
        statics: {
            testClippingIssues: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1096).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1096);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1096.testClippingIssues();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1098', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1098)],
        statics: {
            testInlineConstantAsMemberReference: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1098).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1098);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1098.testInlineConstantAsMemberReference();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1103', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1103)],
        statics: {
            testPropertyOps: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1103).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1103);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1103.testPropertyOps();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1105', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1105)],
        statics: {
            testStaticInitForNestedClasses: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1105).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1105);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1105.testStaticInitForNestedClasses();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1109', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1109)],
        statics: {
            testTemplateOnProperty: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1109).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1109);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1109.testTemplateOnProperty();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1110', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1110)],
        statics: {
            testOverflowForConditionInParenthesized: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1110).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1110);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1110.testOverflowForConditionInParenthesized();
            },
            testOverflowForIndexer: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1110).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1110);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1110.testOverflowForIndexer();
            },
            testOverflowForBitwise: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1110).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1110);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1110.testOverflowForBitwise();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1120', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1120)],
        statics: {
            testEnumDoesNotGenerateValuesAsPowerOfTwo: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1120).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1120);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1120.testEnumDoesNotGenerateValuesAsPowerOfTwo();
            },
            testFlagEnumDoesNotGenerateValuesAsPowerOfTwo: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1120).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1120);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1120.testFlagEnumDoesNotGenerateValuesAsPowerOfTwo();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1128', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1128)],
        statics: {
            testNestedClassesWithInterface: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1128).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1128);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1128.testNestedClassesWithInterface();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1130', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1130)],
        statics: {
            testUlongDivision: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1130).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1130);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1130.testUlongDivision();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1134', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1134)],
        statics: {
            testJsonArrayParse: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1134).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1134);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1134.testJsonArrayParse();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1140', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1140)],
        statics: {
            testDefaultNullable: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1140).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1140);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1140.testDefaultNullable();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1141', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1141)],
        statics: {
            testLongDivisionInfiniteLoopFixed: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1141).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1141);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1141.testLongDivisionInfiniteLoopFixed();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1144', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1144)],
        statics: {
            testStringFormat: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1144).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1144);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1144.testStringFormat();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1146', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1146)],
        statics: {
            testLongIssues: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1146).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1146);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1146.testLongIssues();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1149', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1149)],
        statics: {
            testBitwiseOrAnd: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1149).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1149);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1149.testBitwiseOrAnd();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1160', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1160)],
        statics: {
            testBitwiseOrAnd: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1160).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1160);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1160.testBitwiseOrAnd();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1170', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1170)],
        statics: {
            testAsyncUsing: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1170).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1170);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1170.testAsyncUsing();
            },
            testAsyncUsingWithException: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1170).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1170);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1170.testAsyncUsingWithException();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1171', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1171)],
        statics: {
            testLinqEnumerableInList: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1171).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1171);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1171.testLinqEnumerableInList();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1175', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1175)],
        statics: {
            testNullComparing: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1175).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1175);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1175.testNullComparing();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1176', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1176)],
        statics: {
            testFunctionLifting: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1176).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1176);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1176.testFunctionLifting();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1177', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1177)],
        statics: {
            testImplicitCast: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1177).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1177);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1177.testImplicitCast();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1180', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1180)],
        statics: {
            testStructClone: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1180).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1180);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1180.testStructClone();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1184', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1184)],
        statics: {
            testGetTypeForNumberTypes: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1184).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1184);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1184.testGetTypeForNumberTypes();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1186', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1186)],
        statics: {
            testLambdasInField: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1186).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1186);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1186.testLambdasInField();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1189', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1189)],
        statics: {
            testTaskNumber: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1189).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1189);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1189.testTaskNumber();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1197', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1197)],
        statics: {
            testGetHashCodeOnDictionary: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1197).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1197);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1197.testGetHashCodeOnDictionary();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1199', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1199)],
        statics: {
            testEventNameCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1199).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1199);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1199.testEventNameCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1202', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202)],
        statics: {
            testRefOutStaticIntField: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1202);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.testRefOutStaticIntField();
            },
            testRefOutLocal1DIntArray: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1202);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.testRefOutLocal1DIntArray();
            },
            testRefOutStatic1DIntArray: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1202);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.testRefOutStatic1DIntArray();
            },
            testRefOutLocal2DIntArray: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1202);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.testRefOutLocal2DIntArray();
            },
            testRefOutStaticDecimalField: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1202);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.testRefOutStaticDecimalField();
            },
            testRefOutLocal1DDecimalArray: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1202);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.testRefOutLocal1DDecimalArray();
            },
            testRefOutLocal2DDecimalArray: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1202);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.testRefOutLocal2DDecimalArray();
            },
            testInlineOutStaticIntField: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1202);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.testInlineOutStaticIntField();
            },
            testInlineOutStatic1DIntArray: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1202);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.testInlineOutStatic1DIntArray();
            },
            testInlineOutLocal2DIntArray: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1202);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.testInlineOutLocal2DIntArray();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1203', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1203)],
        statics: {
            testLiftedFunctionsInsideInitMethod: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1203).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1203);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1203.testLiftedFunctionsInsideInitMethod();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1206', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1206)],
        statics: {
            testDocumentURLProperty: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1206).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1206);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1206.testDocumentURLProperty();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1217', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1217)],
        statics: {
            testTypeInferenceWithNamedArguments: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1217).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1217);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1217.testTypeInferenceWithNamedArguments();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1219', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1219)],
        statics: {
            testLongJSON: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1219).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1219);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1219.testLongJSON();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge122', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge122)],
        statics: {
            test2DArrayConstruction: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge122).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge122, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge122.test2DArrayConstruction();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1220', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1220)],
        statics: {
            testConstInGenericClass: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1220).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1220);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1220.testConstInGenericClass();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1226', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1226)],
        statics: {
            testSinh: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1226).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1226);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1226.testSinh();
            },
            testCosh: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1226).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1226);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1226.testCosh();
            },
            testTanh: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1226).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1226);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1226.testTanh();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1231', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1231)],
        statics: {
            testAutoGeneratedStructMethodName: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1231).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1231);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1231.testAutoGeneratedStructMethodName();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1232', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1232)],
        statics: {
            testParamsInThisCtorInit: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1232).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1232);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1232.testParamsInThisCtorInit();
            },
            testExtendedParamsInThisCtorInit: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1232).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1232);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1232.testExtendedParamsInThisCtorInit();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1241', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1241)],
        statics: {
            testMarkElement: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1241).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1241, 4);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1241.testMarkElement();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1249', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1249)],
        statics: {
            testEnumOverflow: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1249).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1249, 2);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1249.testEnumOverflow();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1253', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1253)],
        statics: {
            testDefaultEnumMode: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1253).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1253);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1253.testDefaultEnumMode();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1256', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1256)],
        statics: {
            testCaseBooleanIsLet: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1256).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1256, 7);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1256.testCaseBooleanIsLet();
            },
            testReservedFields: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1256).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1256, 67);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1256.testReservedFields();
            },
            testReservedMethods: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1256).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1256, 67);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1256.testReservedMethods();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1260', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1260)],
        statics: {
            testStringTrim: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1260).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1260, 3);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1260.testStringTrim();
            },
            testStringTrimStart: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1260).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1260, 3);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1260.testStringTrimStart();
            },
            testStringTrimEnd: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1260).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1260, 3);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1260.testStringTrimEnd();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1264', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1264)],
        statics: {
            testDefaultGetHashCodeIsRepeatable: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1264).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1264, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1264.testDefaultGetHashCodeIsRepeatable();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1266', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1266)],
        statics: {
            testArrayToEnumerable: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1266).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1266);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1266.testArrayToEnumerable();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1296', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1296)],
        statics: {
            testImplicitOperator: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1296).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1296);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1296.testImplicitOperator();
            },
            testIgnoreCast: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1296).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1296);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1296.testIgnoreCast();
            },
            testExternalImplicit: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1296).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1296);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1296.testExternalImplicit();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1298', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1298)],
        statics: {
            testLongSwitch: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1298).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1298, 3);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1298.testLongSwitch();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1304', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1304)],
        statics: {
            testWriteFormatString: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1304).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1304);
                try {
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1304.testWriteFormatString();
                }
                finally {
                    t.tearDown();
                }
            },
            testWriteLineFormatString: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1304).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1304);
                try {
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1304.testWriteLineFormatString();
                }
                finally {
                    t.tearDown();
                }
            }
        },
        setUp: function () {
            Bridge.ClientTest.Batch3.BridgeIssues.Bridge1304.clearOutput();
        },
        tearDown: function () {
            Bridge.ClientTest.Batch3.BridgeIssues.Bridge1304.resetOutput();
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1305', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1305)],
        statics: {
            testAsyncIntReturnWithAssigmentFromResult: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1305).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1305);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1305.testAsyncIntReturnWithAssigmentFromResult();
            },
            testAsyncDataClassReturnWithAssigmentFromResult: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1305).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1305);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1305.testAsyncDataClassReturnWithAssigmentFromResult();
            },
            testAsyncDataStructReturnWithAssigmentFromResult: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1305).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1305);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1305.testAsyncDataStructReturnWithAssigmentFromResult();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1311', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1311)],
        statics: {
            testEnumNumberParsing: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1311).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1311);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1311.testEnumNumberParsing();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1313', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1313)],
        statics: {
            testInterfaceDefaultParameter: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1313).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1313);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1313.testInterfaceDefaultParameter();
            },
            testClassNotDefaultParameter: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1313).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1313);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1313.testClassNotDefaultParameter();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1316', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1316)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1316).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1316);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1316.testUseCase();
            },
            testStringConcatObject: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1316).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1316);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1316.testStringConcatObject();
            },
            testStringConcatEnumerableString: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1316).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1316);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1316.testStringConcatEnumerableString();
            },
            testStringConcatEnumerableGeneric: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1316).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1316);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1316.testStringConcatEnumerableGeneric();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1328', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1328)],
        statics: {
            testOptionalParamsForClasses: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1328).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1328);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1328.testOptionalParamsForClasses();
            },
            testOptionalParamsForStructs: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1328).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1328);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1328.testOptionalParamsForStructs();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1339', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1339)],
        statics: {
            testAccessingConstantsFromDerivedClass: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1339).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1339);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1339.testAccessingConstantsFromDerivedClass();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1340', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340)],
        statics: {
            testStructGenericMembersDefaultValue: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1340);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.testStructGenericMembersDefaultValue();
            },
            testStructTwoGenericMembersDefaultValue: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1340);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.testStructTwoGenericMembersDefaultValue();
            },
            testClassGenericMembersDefaultValue: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1340);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.testClassGenericMembersDefaultValue();
            },
            testClassTwoGenericMembersDefaultValue: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1340);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.testClassTwoGenericMembersDefaultValue();
            },
            testClass1TwoGenericInheritedMembersDefaultValue: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1340);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.testClass1TwoGenericInheritedMembersDefaultValue();
            },
            testClass2TwoGenericInheritedMembersDefaultValue: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1340);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.testClass2TwoGenericInheritedMembersDefaultValue();
            },
            testClass3TwoGenericInheritedMembersDefaultValue: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1340);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.testClass3TwoGenericInheritedMembersDefaultValue();
            },
            testStructStaticIntArray: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1340);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.testStructStaticIntArray();
            },
            testStructStaticLongArray: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1340);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.testStructStaticLongArray();
            },
            testStructStaticStringArray: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1340);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.testStructStaticStringArray();
            },
            testStaticClassGenericMembersDefaultValue: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1340);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.testStaticClassGenericMembersDefaultValue();
            },
            testStaticClassTwoGenericMembersDefaultValue: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1340);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.testStaticClassTwoGenericMembersDefaultValue();
            },
            testStaticClass1TwoGenericInheritedMembersDefaultValue: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1340);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.testStaticClass1TwoGenericInheritedMembersDefaultValue();
            },
            testStaticClass2TwoGenericInheritedMembersDefaultValue: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1340);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.testStaticClass2TwoGenericInheritedMembersDefaultValue();
            },
            testStaticClass3TwoGenericInheritedMembersDefaultValue: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1340);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.testStaticClass3TwoGenericInheritedMembersDefaultValue();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1341', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341)],
        statics: {
            testPlainObject: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1341);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.testPlainObject();
            },
            testAnonymousTypeCreation: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1341);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.testAnonymousTypeCreation();
            },
            testDiffStructHashCode: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1341);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.testDiffStructHashCode();
            },
            testDiffAnonymousTypesHashCode: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1341);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.testDiffAnonymousTypesHashCode();
            },
            test1AnonymousType: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1341);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.test1AnonymousType();
            },
            test2AnonymousType: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1341);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.test2AnonymousType();
            },
            test3AnonymousType: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1341);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.test3AnonymousType();
            },
            test4AnonymousType: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1341);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.test4AnonymousType();
            },
            test5AnonymousType: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1341);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.test5AnonymousType();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1343', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1343)],
        statics: {
            testDoubleTemplate: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1343).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1343);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1343.testDoubleTemplate();
            },
            testInlineInGetHashCode: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1343).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1343);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1343.testInlineInGetHashCode();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1344', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1344)],
        statics: {
            testLocalVariableWithNameProto: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1344).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1344);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1344.testLocalVariableWithNameProto();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1348', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1348)],
        statics: {
            testVoidTypeOf: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1348).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1348);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1348.testVoidTypeOf();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1355', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1355)],
        statics: {
            testLocalVariableWithNameWindow: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1355).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1355);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1355.testLocalVariableWithNameWindow();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1374', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1374)],
        statics: {
            testConvertAllForIntListStaticMethod: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1374).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1374, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1374.testConvertAllForIntListStaticMethod();
            },
            testConvertAllForIntListInstanceMethod: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1374).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1374, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1374.testConvertAllForIntListInstanceMethod();
            },
            testConvertAllForIntListLambda: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1374).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1374, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1374.testConvertAllForIntListLambda();
            },
            testConvertAllForNullConverter: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1374).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1374, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1374.testConvertAllForNullConverter();
            },
            testConvertAllForNullArray: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1374).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1374, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1374.testConvertAllForNullArray();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1378', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378)],
        statics: {
            testAssigmentWithMinusOperator: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1378);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378.testAssigmentWithMinusOperator();
            },
            testAssigmentWithPlusOperator: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1378);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378.testAssigmentWithPlusOperator();
            },
            testAssigmentWithOverloadMinusOperator: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1378);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378.testAssigmentWithOverloadMinusOperator();
            },
            testAssigmentWithOverloadPlusOperator: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1378);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378.testAssigmentWithOverloadPlusOperator();
            },
            testAssigmentWithConditionalPlusOperator: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1378);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378.testAssigmentWithConditionalPlusOperator();
            },
            testAssigmentWithConditionalMinusOperator: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1378);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378.testAssigmentWithConditionalMinusOperator();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1379', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1379)],
        statics: {
            testNanFiniteType: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1379).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1379);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1379.testNanFiniteType();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1385', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1385)],
        statics: {
            testIsTypedArray: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1385).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1385);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1385.testIsTypedArray();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1389', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1389)],
        statics: {
            testParamsIndexer: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1389).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1389);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1389.testParamsIndexer();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1391', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1391)],
        statics: {
            testStaticCtorOrder: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1391).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1391);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1391.testStaticCtorOrder();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1391Ready', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1391Ready)],
        statics: {
            testStaticCtorOrderForClassHavingReady: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1391Ready).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1391Ready);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1391Ready.testStaticCtorOrderForClassHavingReady();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1402', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1402)],
        statics: {
            testLongClipping: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1402).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1402);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1402.testLongClipping();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1410', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1410)],
        statics: {
            testSetterOnly: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1410).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1410);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1410.testSetterOnly();
            },
            testIndexer: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1410).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1410);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1410.testIndexer();
            },
            testAssigmentWithOp: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1410).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1410);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1410.testAssigmentWithOp();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1411', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1411)],
        statics: {
            testTemplateCtorThing: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1411).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1411);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1411.testTemplateCtorThing();
            },
            testTemplateCtorDoodad: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1411).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1411);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1411.testTemplateCtorDoodad();
            },
            testTemplateCtorGizmo: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1411).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1411);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1411.testTemplateCtorGizmo();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1428', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1428)],
        statics: {
            testEqOperatorWithNull: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1428).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1428);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1428.testEqOperatorWithNull();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1429', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1429)],
        statics: {
            testEqOperatorWithNull: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1429).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1429);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1429.testEqOperatorWithNull();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1438', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1438)],
        statics: {
            testJSONParse: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1438).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1438, 4);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1438.testJSONParse();
            },
            testJSONParseAsArray: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1438).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1438, 7);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1438.testJSONParseAsArray();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1448', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1448)],
        statics: {
            testPlainForNonAnonymous: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1448).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1448, 7);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1448.testPlainForNonAnonymous();
            },
            testObjectLiteralProperty: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1448).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1448, 7);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1448.testObjectLiteralProperty();
            },
            testToObjectLiteralAlias: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1448).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1448, 7);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1448.testToObjectLiteralAlias();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1459', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1459)],
        statics: {
            testHtmlElements: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1459).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1459);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1459.testHtmlElements();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1467', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1467)],
        statics: {
            testForeachTypeChecking: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1467).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1467, 7);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1467.testForeachTypeChecking();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1476', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1476)],
        statics: {
            testEscapedBrackets: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1476).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1476);
                t.getFixture().testEscapedBrackets();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1480', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1480)],
        statics: {
            testOverloadUnaryOperator: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1480).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1480);
                t.getFixture().testOverloadUnaryOperator();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1485', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1485)],
        statics: {
            testConstructorName: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1485).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1485);
                t.getFixture().testConstructorName();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1486', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1486)],
        statics: {
            testConstructorName: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1486).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1486);
                t.getFixture().testConstructorName();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1501', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1501)],
        statics: {
            testPropertyChangedEventArgs: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1501).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1501);
                t.getFixture().testPropertyChangedEventArgs();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1653', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1653)],
        statics: {
            testLiftedFunctionsWithGenericInvocation: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1653).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge1653);
                t.getFixture().testLiftedFunctionsWithGenericInvocation();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge381', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge381)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge381).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge381, 6);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge381.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge447', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge447)],
        statics: {
            checkInlineExpression: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge447).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge447, 3);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge447.checkInlineExpression();
            },
            checkInlineCalls: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge447).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge447, 3);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge447.checkInlineCalls();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge472', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge472)],
        statics: {
            test: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge472).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge472, 10);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge472.test();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge479', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge479)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge479).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge479, 3);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge479.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge485', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge485)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge485).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge485, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge485.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge495', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge495)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge495).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge495, 3);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge495.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge501', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge501)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge501).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge501, 5);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge501.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge502', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge502)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge502).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge502, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge502.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge503', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge503)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge503).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge503, 4);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge503.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge508', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge508)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge508).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge508, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge508.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge514', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge514)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge514).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge514, 2);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge514.testUseCase();
            },
            testRelated: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge514).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge514, 2);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge514.testRelated();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge520', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge520)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge520).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge520, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge520.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge522', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge522)],
        statics: {
            testUseCase1: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge522).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge522, 2);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge522.testUseCase1();
            },
            testUseCase2: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge522).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge522, 2);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge522.testUseCase2();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge532', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge532)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge532).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge532, 3);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge532.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge537', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge537)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge537).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge537, 2);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge537.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge538', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge538)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge538).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge538, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge538.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge544', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge544)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge544).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge544, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge544.testUseCase();
            },
            testRelated: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge544).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge544, 5);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge544.testRelated();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge546', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge546)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge546).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge546, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge546.testUseCase();
            },
            testRelated: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge546).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge546, 5);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge546.testRelated();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge548', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge548)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge548).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge548, 18);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge548.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge549', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge549)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge549).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge549, 153);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge549.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge550', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge550)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge550).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge550, 10);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge550.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge554', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge554)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge554).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge554, 4);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge554.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge555', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge555)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge555).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge555, 15);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge555.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge558', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge558)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge558).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge558, 4);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge558.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge559', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge559)],
        statics: {
            testUseCase1: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge559).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge559, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge559.testUseCase1();
            },
            testUseCase2: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge559).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge559, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge559.testUseCase2();
            },
            testUseCase3: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge559).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge559, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge559.testUseCase3();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge563', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge563)],
        statics: {
            tesForeach: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge563).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge563, 2);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge563.tesForeach();
            },
            tesFor: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge563).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge563, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge563.tesFor();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge566', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge566)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge566).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge566, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge566.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge572', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge572)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge572).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge572, 4);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge572.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge577', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge577)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge577).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge577, 2);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge577.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge578', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge578)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge578).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge578, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge578.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge580', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge580)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge580).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge580, 10);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge580.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge582', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge582)],
        statics: {
            testAddTimeSpan: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge582).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge582, 6);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge582.testAddTimeSpan();
            },
            testAddTicks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge582).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge582, 6);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge582.testAddTicks();
            },
            testTicks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge582).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge582, 7);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge582.testTicks();
            },
            testSubtractTimeSpan: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge582).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge582, 4);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge582.testSubtractTimeSpan();
            },
            testTimeOfDay: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge582).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge582, 6);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge582.testTimeOfDay();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge583', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge583)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge583).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge583, 120);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge583.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge586', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge586)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge586).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge586, 4);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge586.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge588', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge588)],
        statics: {
            testUseCase1: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge588).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge588, 2);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge588.testUseCase1();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge588C', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge588C)],
        statics: {
            testUseCase2: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge588C).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge588C, 9);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge588C.testUseCase2();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge592', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge592)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge592).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge592, 6);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge592.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge595', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge595)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge595).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge595, 2);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge595.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge597', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge597)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge597).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge597, 2);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge597.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge603', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge603)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge603).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge603, 2);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge603.testUseCase();
            },
            testRelated: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge603).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge603, 5);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge603.testRelated();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge606', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge606)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge606).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge606, 5);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge606.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge607', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge607)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge607).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge607, 5);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge607.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge608', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge608)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge608).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge608, 2);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge608.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge615', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge615)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge615).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge615, 2);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge615.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge623', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge623)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge623).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge623, 8);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge623.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge625', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge625)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge625).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge625, 5);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge625.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge634', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge634)],
        statics: {
            testUseCase2: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge634).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge634, 21);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge634.testUseCase2();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge635', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge635)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge635).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge635, 4);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge635.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge637', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge637)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge637).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge637);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge637.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge647', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge647)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge647).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge647, 3);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge647.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge648', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge648)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge648).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge648, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge648.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge652', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge652)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge652).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge652, 4);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge652.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge655', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge655)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge655).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge655, 12);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge655.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge658', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge658)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge658).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge658, 2);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge658.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge660', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge660)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge660).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge660, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge660.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge661', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge661)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge661).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge661, 6);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge661.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge664', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge664)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge664).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge664, 2);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge664.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge666', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge666)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge666).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge666, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge666.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge671', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge671)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge671).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge671, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge671.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge674', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge674)],
        statics: {
            testUndefinedToReferenceType: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge674).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge674, 2);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge674.testUndefinedToReferenceType();
            },
            testUndefinedToValueType: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge674).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge674, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge674.testUndefinedToValueType();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge675', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge675)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge675).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge675, 3);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge675.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge687', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge687)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge687).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge687, 2);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge687.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge689', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge689)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge689).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge689, 2);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge689.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge690', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge690)],
        statics: {
            testUseCaseForInstance: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge690).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge690, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge690.testUseCaseForInstance();
            },
            testUseCaseForStatic: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge690).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge690, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge690.testUseCaseForStatic();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge691', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge691)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge691).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge691, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge691.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge692', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge692)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge692).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge692, 8);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge692.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge693', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge693)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge693).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge693, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge693.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge694', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge694)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge694).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge694, 3);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge694.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge696', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge696)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge696).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge696, 2);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge696.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge699', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge699)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge699).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge699, 5);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge699.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge708', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge708)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge708).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge708, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge708.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge721', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge721)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge721).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge721, 4);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge721.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge722', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge722)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge722).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge722, 9);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge722.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge726', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge726)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge726).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge726, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge726.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge732', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge732)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge732).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge732, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge732.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge733', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge733)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge733).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge733, 2);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge733.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge743', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge743)],
        statics: {
            testInlineMethodsAsReference: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge743).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge743, 9);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge743.testInlineMethodsAsReference();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge751', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge751)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge751).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge751, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge751.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge758', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge758)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge758).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge758, 3);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge758.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge760', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge760)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge760).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge760, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge760.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge762', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge762)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge762).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge762, 4);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge762.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge772', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge772)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge772).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge772, 10);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge772.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge777', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge777)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge777).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge777, 4);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge777.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge782', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge782)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge782).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge782, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge782.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge785', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge785)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge785).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge785, 7);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge785.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge786', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge786)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge786).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge786, 2);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge786.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge788', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge788)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge788).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge788, 2);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge788.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge789', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge789)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge789).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge789, 3);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge789.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge793', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge793)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge793).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge793, 5);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge793.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge795', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge795)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge795).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge795, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge795.testUseCase();
            },
            testRelated: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge795).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge795, 16);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge795.testRelated();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge796', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge796)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge796).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge796, 5);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge796.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge815', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge815)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge815).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge815, 7);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge815.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge816', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge816)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge816).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge816, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge816.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge817', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge817)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge817).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge817, 4);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge817.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge818', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge818)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge818).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge818, 3);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge818.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge821', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge821)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge821).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge821, 9);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge821.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge823', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge823)],
        statics: {
            getTicksReturnsCorrectValue: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge823).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge823, 3);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge823.getTicksReturnsCorrectValue();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge826', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge826)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge826).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge826, 5);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge826.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge830', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge830)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge830).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge830, 2);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge830.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge835', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge835)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge835).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge835, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge835.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge841', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge841)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge841).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge841, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge841.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge844', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge844)],
        statics: {
            nullableAndSimpleDateTimeToStringEquals: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge844).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge844, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge844.nullableAndSimpleDateTimeToStringEquals();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge849', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge849)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge849).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge849, 2);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge849.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge857', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge857)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge857).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge857, 8);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge857.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge861', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge861)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge861).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge861, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge861.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge863', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge863)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge863).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge863, 4);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge863.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge874', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge874)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge874).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge874, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge874.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge881', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge881)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge881).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge881, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge881.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge882', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge882)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge882).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge882, 2);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge882.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge883', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge883)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge883).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge883, 2);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge883.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge889', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge889)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge889).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge889, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge889.testUseCase();
            },
            testMakeEnumerable: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge889).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge889, 8);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge889.testMakeEnumerable();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge892', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge892)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge892).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge892, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge892.testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge893', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge893)],
        statics: {
            enumToStringWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge893).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge893, 5);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge893.enumToStringWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge898', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge898)],
        statics: {
            testDecimalConversion: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge898).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge898, 2);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge898.testDecimalConversion();
            },
            testDoubleConversion: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge898).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge898, 2);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge898.testDoubleConversion();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge905', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge905)],
        statics: {
            dayOfWeekFixed: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge905).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge905, 2);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge905.dayOfWeekFixed();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge906', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge906)],
        statics: {
            testIfAsyncMethod: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge906).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge906, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge906.testIfAsyncMethod();
            },
            testIfElseAsyncMethod: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge906).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge906, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge906.testIfElseAsyncMethod();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge907', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge907)],
        statics: {
            testStringSpitWithNullParameterFixed: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge907).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge907, 6);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge907.testStringSpitWithNullParameterFixed();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge912', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge912)],
        statics: {
            testAsyncMethodInBlock: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge912).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge912, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge912.testAsyncMethodInBlock();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge913', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge913)],
        statics: {
            testNullableDateTimeGreaterThanWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge913).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge913, 2);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge913.testNullableDateTimeGreaterThanWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge918', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge918)],
        statics: {
            testDynamicAsyncResult: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge918).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge918, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge918.testDynamicAsyncResult();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge922', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge922)],
        statics: {
            testLinqDecimal: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge922).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge922, 2);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge922.testLinqDecimal();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge928', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge928)],
        statics: {
            testAsyncMethod: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge928).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge928, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge928.testAsyncMethod();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge929', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge929)],
        statics: {
            testAsyncException: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge929).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge929, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge929.testAsyncException();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge930', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge930)],
        statics: {
            testAsyncException: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge930).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge930, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge930.testAsyncException();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge933', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge933)],
        statics: {
            testBooleanInIfStatement: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge933).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge933, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge933.testBooleanInIfStatement();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge952', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge952)],
        statics: {
            testDoubleMinValue: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge952).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge952, 2);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge952.testDoubleMinValue();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge968', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge968)],
        statics: {
            testDecimalDoesNotParseIncorrectValue: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge968).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge968, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge968.testDecimalDoesNotParseIncorrectValue();
            },
            testDecimalParsesCorrectValues: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge968).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge968, 3);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge968.testDecimalParsesCorrectValues();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge975', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge975)],
        statics: {
            testCastToLongWorksForBigNumberInIE: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge975).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge975, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge975.testCastToLongWorksForBigNumberInIE();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge989', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge989)],
        statics: {
            dateTimeToISOStringWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge989).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge989, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge989.dateTimeToISOStringWorks();
            },
            dateToISOStringWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge989).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge989, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge989.dateToISOStringWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge991', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge991)],
        statics: {
            testMultiplyAssignment: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge991).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge991, 14);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge991.testMultiplyAssignment();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge997', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge997)],
        statics: {
            testConvertAllForIntList: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge997).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge997, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge997.testConvertAllForIntList();
            },
            testConvertAllForNullConverter: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge997).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge997, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge997.testConvertAllForNullConverter();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge999', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge999)],
        statics: {
            testNestedLambdasToLifting: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge999).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge999, 12);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge999.testNestedLambdasToLifting();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge999_1', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge999_1)],
        statics: {
            testNestedLambdasToLiftingInForeach: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge999_1).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_Bridge999_1, 5);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge999_1.testNestedLambdasToLiftingInForeach();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_N1122', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.N1122)],
        statics: {
            testClippingInDefaultOverflowMode: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.N1122).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_N1122, 4);
                Bridge.ClientTest.Batch3.BridgeIssues.N1122.testClippingInDefaultOverflowMode();
            },
            testIntegerDivisionInDefaultMode: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.N1122).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_N1122, 4);
                Bridge.ClientTest.Batch3.BridgeIssues.N1122.testIntegerDivisionInDefaultMode();
            },
            testInfinityCastDefaultOverflowMode: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.N1122).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_N1122, 16);
                Bridge.ClientTest.Batch3.BridgeIssues.N1122.testInfinityCastDefaultOverflowMode();
            },
            testInfinityCastWithNullable1DefaultOverflowMode: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.N1122).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_N1122, 16);
                Bridge.ClientTest.Batch3.BridgeIssues.N1122.testInfinityCastWithNullable1DefaultOverflowMode();
            },
            testInfinityCastWithNullable2DefaultOverflowMode: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.N1122).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_N1122, 16);
                Bridge.ClientTest.Batch3.BridgeIssues.N1122.testInfinityCastWithNullable2DefaultOverflowMode();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues)],
        statics: {
            n169: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues, 2);
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.n169();
            },
            n240: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues, 3);
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.n240();
            },
            n264: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.n264();
            },
            n266: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.n266();
            },
            n272: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues, 3);
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.n272();
            },
            n273: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues, 4);
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.n273();
            },
            n277: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.n277();
            },
            n294: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues, 2);
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.n294();
            },
            n304: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues, 2);
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.n304();
            },
            n305: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.n305();
            },
            n306: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues, 2);
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.n306();
            },
            n329: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues, 5);
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.n329();
            },
            n335: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.n335();
            },
            n336: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues, 2);
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.n336();
            },
            n337: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues, 4);
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.n337();
            },
            n338: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.n338();
            },
            n339: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues, 2);
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.n339();
            },
            n340: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues, 6);
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.n340();
            },
            n341: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues, 4);
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.n341();
            },
            n342: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues, 2);
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.n342();
            },
            n349: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues, 5);
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.n349();
            },
            n377: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues, 6);
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.n377();
            },
            n383: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues, 2);
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.n383();
            },
            n393: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues, 2);
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.n393();
            },
            n395: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues, 3);
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.n395();
            },
            n406: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.n406();
            },
            n407: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues, 2);
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.n407();
            },
            n409: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues, 2);
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.n409();
            },
            n410: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues, 50);
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.n410();
            },
            n418: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.n418();
            },
            n422: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues, 3);
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.n422();
            },
            n428: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.n428();
            },
            n435: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues, 2);
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.n435();
            },
            n436: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues, 3);
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.n436();
            },
            n438: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.n438();
            },
            n439: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues, 2);
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.n439();
            },
            n442: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues, 2);
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.n442();
            },
            n460: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.n460();
            },
            n467: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.n467();
            },
            n469: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.n469();
            },
            n470: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues, 16);
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.n470();
            },
            n499: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch3_BridgeIssues_TestBridgeIssues, 1);
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.n499();
            }
        }
    });
    
    Bridge.init();
});
