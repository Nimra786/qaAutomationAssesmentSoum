describe('API Tests', () => {
    const baseUrl = Cypress.config('baseUrlApi');
    const expectedSchema = {
        "type": "object",
        "properties": {
          "message": {
            "type": "string"
          },
          "responseData": {
            "type": "object",
            "properties": {
              "info": {
                "type": "object",
                "properties": {
                  "total": {
                    "type": "integer"
                  },
                  "pages": {
                    "type": "integer"
                  }
                },
                "required": [
                  "total",
                  "pages"
                ]
              },
              "results": {
                "type": "array",
                "items": [
                  {
                    "type": "object",
                    "properties": {
                      "product_images": {
                        "type": "array",
                        "items": [
                          {
                            "type": "string"
                          }
                        ]
                      },
                      "defected_images": {
                        "type": "array",
                        "items": {}
                      },
                      "description": {
                        "type": "string"
                      },
                      "answer_to_questions": {
                        "type": "string"
                      },
                      "answer_to_questions_ar": {
                        "type": "string"
                      },
                      "answer_to_questions_migration": {
                        "type": "string"
                      },
                      "answer_to_questions_ar_migration": {
                        "type": "string"
                      },
                      "unansweredquestions": {
                        "type": "string"
                      },
                      "unmatchedquestions": {
                        "type": "string"
                      },
                      "grade": {
                        "type": "string"
                      },
                      "grade_ar": {
                        "type": "string"
                      },
                      "score": {
                        "type": "number"
                      },
                      "previous_grade": {
                        "type": "string"
                      },
                      "previous_score": {
                        "type": "number"
                      },
                      "bidding": {
                        "type": "array",
                        "items": {}
                      },
                      "save_as_draft_step": {
                        "type": "string"
                      },
                      "current_bid_price": {
                        "type": "integer"
                      },
                      "favourited_by": {
                        "type": "array",
                        "items": {}
                      },
                      "status": {
                        "type": "string"
                      },
                      "sell_status": {
                        "type": "string"
                      },
                      "questionnaire_migration_status": {
                        "type": "string"
                      },
                      "isApproved": {
                        "type": "boolean"
                      },
                      "isExpired": {
                        "type": "boolean"
                      },
                      "isFraudDetected": {
                        "type": "boolean"
                      },
                      "verified_date": {
                        "type": "null"
                      },
                      "isListedBefore": {
                        "type": "boolean"
                      },
                      "highlights": {
                        "type": "array",
                        "items": {}
                      },
                      "attributes": {
                        "type": "array",
                        "items": {}
                      },
                      "highlightsAdded": {
                        "type": "string"
                      },
                      "isReported": {
                        "type": "boolean"
                      },
                      "reportedBy": {
                        "type": "array",
                        "items": {}
                      },
                      "isVerifiedByAdmin": {
                        "type": "boolean"
                      },
                      "isPriceUpdating": {
                        "type": "boolean"
                      },
                      "variant_attributes_selections": {
                        "type": "array",
                        "items": {}
                      },
                      "isBiddingProduct": {
                        "type": "boolean"
                      },
                      "trade_in": {
                        "type": "boolean"
                      },
                      "trade_in_status": {
                        "type": "string"
                      },
                      "listingSource": {
                        "type": "string"
                      },
                      "_id": {
                        "type": "string"
                      },
                      "user_id": {
                        "type": "string"
                      },
                      "category_id": {
                        "type": "string"
                      },
                      "brand_id": {
                        "type": "string"
                      },
                      "model_id": {
                        "type": "string"
                      },
                      "varient": {
                        "type": "string"
                      },
                      "varient_ar": {
                        "type": "string"
                      },
                      "body_cracks": {
                        "type": "string"
                      },
                      "sell_price": {
                        "type": "integer"
                      },
                      "bid_price": {
                        "type": "integer"
                      },
                      "pick_up_address": {
                        "type": "object",
                        "properties": {
                          "address_id": {
                            "type": "string"
                          },
                          "address": {
                            "type": "string"
                          },
                          "city": {
                            "type": "string"
                          },
                          "postal_code": {
                            "type": "string"
                          },
                          "address_type": {
                            "type": "string"
                          },
                          "latitude": {
                            "type": "string"
                          },
                          "longitude": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "address_id",
                          "address",
                          "city",
                          "postal_code",
                          "address_type",
                          "latitude",
                          "longitude"
                        ]
                      },
                      "createdDate": {
                        "type": "string"
                      },
                      "updatedDate": {
                        "type": "string"
                      },
                      "__v": {
                        "type": "integer"
                      },
                      "expiryDate": {
                        "type": "string"
                      },
                      "code": {
                        "type": "string"
                      },
                      "varient_id": {
                        "type": "string"
                      },
                      "response": {
                        "type": "string"
                      },
                      "model_migration_source": {
                        "type": "string"
                      },
                      "model_variant_map_id": {
                        "type": "string"
                      },
                      "variant_migration_source": {
                        "type": "string"
                      },
                      "rejected_reasons": {
                        "type": "null"
                      },
                      "rejected_timestamp": {
                        "type": "null"
                      },
                      "image_updated": {
                        "type": "string"
                      },
                      "verifiedByAdminDate": {
                        "type": "string"
                      },
                      "category": {
                        "type": "object",
                        "properties": {
                          "_id": {
                            "type": "string"
                          },
                          "category_name_ar": {
                            "type": "string"
                          },
                          "active": {
                            "type": "boolean"
                          }
                        },
                        "required": [
                          "_id",
                          "category_name_ar",
                          "active"
                        ]
                      },
                      "brand": {
                        "type": "object",
                        "properties": {
                          "_id": {
                            "type": "string"
                          },
                          "brand_name_ar": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "_id",
                          "brand_name_ar"
                        ]
                      },
                      "model": {
                        "type": "object",
                        "properties": {
                          "_id": {
                            "type": "string"
                          },
                          "model_name_ar": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "_id",
                          "model_name_ar"
                        ]
                      },
                      "variant": {
                        "type": "array",
                        "items": [
                          {
                            "type": "object",
                            "properties": {
                              "_id": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "_id"
                            ]
                          }
                        ]
                      },
                      "id": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "product_images",
                      "defected_images",
                      "description",
                      "answer_to_questions",
                      "answer_to_questions_ar",
                      "answer_to_questions_migration",
                      "answer_to_questions_ar_migration",
                      "unansweredquestions",
                      "unmatchedquestions",
                      "grade",
                      "grade_ar",
                      "score",
                      "previous_grade",
                      "previous_score",
                      "bidding",
                      "save_as_draft_step",
                      "current_bid_price",
                      "favourited_by",
                      "status",
                      "sell_status",
                      "questionnaire_migration_status",
                      "isApproved",
                      "isExpired",
                      "isFraudDetected",
                      "verified_date",
                      "isListedBefore",
                      "highlights",
                      "attributes",
                      "highlightsAdded",
                      "isReported",
                      "reportedBy",
                      "isVerifiedByAdmin",
                      "isPriceUpdating",
                      "variant_attributes_selections",
                      "isBiddingProduct",
                      "trade_in",
                      "trade_in_status",
                      "listingSource",
                      "_id",
                      "user_id",
                      "category_id",
                      "brand_id",
                      "model_id",
                      "varient",
                      "varient_ar",
                      "body_cracks",
                      "sell_price",
                      "bid_price",
                      "pick_up_address",
                      "createdDate",
                      "updatedDate",
                      "__v",
                      "expiryDate",
                      "code",
                      "varient_id",
                      "response",
                      "model_migration_source",
                      "model_variant_map_id",
                      "variant_migration_source",
                      "rejected_reasons",
                      "rejected_timestamp",
                      "image_updated",
                      "verifiedByAdminDate",
                      "category",
                      "brand",
                      "model",
                      "variant",
                      "id"
                    ]
                  },
                  {
                    "type": "object",
                    "properties": {
                      "product_images": {
                        "type": "array",
                        "items": [
                          {
                            "type": "string"
                          }
                        ]
                      },
                      "defected_images": {
                        "type": "array",
                        "items": {}
                      },
                      "description": {
                        "type": "string"
                      },
                      "answer_to_questions": {
                        "type": "string"
                      },
                      "answer_to_questions_ar": {
                        "type": "string"
                      },
                      "answer_to_questions_migration": {
                        "type": "string"
                      },
                      "answer_to_questions_ar_migration": {
                        "type": "string"
                      },
                      "unansweredquestions": {
                        "type": "string"
                      },
                      "unmatchedquestions": {
                        "type": "string"
                      },
                      "grade": {
                        "type": "string"
                      },
                      "grade_ar": {
                        "type": "string"
                      },
                      "score": {
                        "type": "number"
                      },
                      "previous_grade": {
                        "type": "string"
                      },
                      "previous_score": {
                        "type": "number"
                      },
                      "bidding": {
                        "type": "array",
                        "items": {}
                      },
                      "save_as_draft_step": {
                        "type": "string"
                      },
                      "current_bid_price": {
                        "type": "integer"
                      },
                      "favourited_by": {
                        "type": "array",
                        "items": {}
                      },
                      "status": {
                        "type": "string"
                      },
                      "sell_status": {
                        "type": "string"
                      },
                      "questionnaire_migration_status": {
                        "type": "string"
                      },
                      "isApproved": {
                        "type": "boolean"
                      },
                      "isExpired": {
                        "type": "boolean"
                      },
                      "isFraudDetected": {
                        "type": "boolean"
                      },
                      "verified_date": {
                        "type": "null"
                      },
                      "isListedBefore": {
                        "type": "boolean"
                      },
                      "highlights": {
                        "type": "array",
                        "items": {}
                      },
                      "attributes": {
                        "type": "array",
                        "items": {}
                      },
                      "highlightsAdded": {
                        "type": "string"
                      },
                      "isReported": {
                        "type": "boolean"
                      },
                      "reportedBy": {
                        "type": "array",
                        "items": {}
                      },
                      "isVerifiedByAdmin": {
                        "type": "boolean"
                      },
                      "isPriceUpdating": {
                        "type": "boolean"
                      },
                      "variant_attributes_selections": {
                        "type": "array",
                        "items": {}
                      },
                      "isBiddingProduct": {
                        "type": "boolean"
                      },
                      "trade_in": {
                        "type": "boolean"
                      },
                      "trade_in_status": {
                        "type": "string"
                      },
                      "listingSource": {
                        "type": "string"
                      },
                      "_id": {
                        "type": "string"
                      },
                      "user_id": {
                        "type": "string"
                      },
                      "category_id": {
                        "type": "string"
                      },
                      "brand_id": {
                        "type": "string"
                      },
                      "model_id": {
                        "type": "string"
                      },
                      "varient": {
                        "type": "string"
                      },
                      "varient_ar": {
                        "type": "string"
                      },
                      "body_cracks": {
                        "type": "string"
                      },
                      "sell_price": {
                        "type": "integer"
                      },
                      "bid_price": {
                        "type": "integer"
                      },
                      "pick_up_address": {
                        "type": "object",
                        "properties": {
                          "address_id": {
                            "type": "string"
                          },
                          "address": {
                            "type": "string"
                          },
                          "city": {
                            "type": "string"
                          },
                          "postal_code": {
                            "type": "string"
                          },
                          "address_type": {
                            "type": "string"
                          },
                          "latitude": {
                            "type": "string"
                          },
                          "longitude": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "address_id",
                          "address",
                          "city",
                          "postal_code",
                          "address_type",
                          "latitude",
                          "longitude"
                        ]
                      },
                      "createdDate": {
                        "type": "string"
                      },
                      "updatedDate": {
                        "type": "string"
                      },
                      "__v": {
                        "type": "integer"
                      },
                      "expiryDate": {
                        "type": "string"
                      },
                      "code": {
                        "type": "string"
                      },
                      "varient_id": {
                        "type": "string"
                      },
                      "response": {
                        "type": "string"
                      },
                      "model_migration_source": {
                        "type": "string"
                      },
                      "model_variant_map_id": {
                        "type": "string"
                      },
                      "variant_migration_source": {
                        "type": "string"
                      },
                      "rejected_reasons": {
                        "type": "null"
                      },
                      "rejected_timestamp": {
                        "type": "null"
                      },
                      "image_updated": {
                        "type": "string"
                      },
                      "verifiedByAdminDate": {
                        "type": "string"
                      },
                      "category": {
                        "type": "object",
                        "properties": {
                          "_id": {
                            "type": "string"
                          },
                          "category_name_ar": {
                            "type": "string"
                          },
                          "active": {
                            "type": "boolean"
                          }
                        },
                        "required": [
                          "_id",
                          "category_name_ar",
                          "active"
                        ]
                      },
                      "brand": {
                        "type": "object",
                        "properties": {
                          "_id": {
                            "type": "string"
                          },
                          "brand_name_ar": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "_id",
                          "brand_name_ar"
                        ]
                      },
                      "model": {
                        "type": "object",
                        "properties": {
                          "_id": {
                            "type": "string"
                          },
                          "model_name_ar": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "_id",
                          "model_name_ar"
                        ]
                      },
                      "variant": {
                        "type": "array",
                        "items": [
                          {
                            "type": "object",
                            "properties": {
                              "_id": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "_id"
                            ]
                          }
                        ]
                      },
                      "id": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "product_images",
                      "defected_images",
                      "description",
                      "answer_to_questions",
                      "answer_to_questions_ar",
                      "answer_to_questions_migration",
                      "answer_to_questions_ar_migration",
                      "unansweredquestions",
                      "unmatchedquestions",
                      "grade",
                      "grade_ar",
                      "score",
                      "previous_grade",
                      "previous_score",
                      "bidding",
                      "save_as_draft_step",
                      "current_bid_price",
                      "favourited_by",
                      "status",
                      "sell_status",
                      "questionnaire_migration_status",
                      "isApproved",
                      "isExpired",
                      "isFraudDetected",
                      "verified_date",
                      "isListedBefore",
                      "highlights",
                      "attributes",
                      "highlightsAdded",
                      "isReported",
                      "reportedBy",
                      "isVerifiedByAdmin",
                      "isPriceUpdating",
                      "variant_attributes_selections",
                      "isBiddingProduct",
                      "trade_in",
                      "trade_in_status",
                      "listingSource",
                      "_id",
                      "user_id",
                      "category_id",
                      "brand_id",
                      "model_id",
                      "varient",
                      "varient_ar",
                      "body_cracks",
                      "sell_price",
                      "bid_price",
                      "pick_up_address",
                      "createdDate",
                      "updatedDate",
                      "__v",
                      "expiryDate",
                      "code",
                      "varient_id",
                      "response",
                      "model_migration_source",
                      "model_variant_map_id",
                      "variant_migration_source",
                      "rejected_reasons",
                      "rejected_timestamp",
                      "image_updated",
                      "verifiedByAdminDate",
                      "category",
                      "brand",
                      "model",
                      "variant",
                      "id"
                    ]
                  },
                  {
                    "type": "object",
                    "properties": {
                      "product_images": {
                        "type": "array",
                        "items": [
                          {
                            "type": "string"
                          }
                        ]
                      },
                      "defected_images": {
                        "type": "array",
                        "items": {}
                      },
                      "description": {
                        "type": "string"
                      },
                      "answer_to_questions": {
                        "type": "string"
                      },
                      "answer_to_questions_ar": {
                        "type": "string"
                      },
                      "answer_to_questions_migration": {
                        "type": "string"
                      },
                      "answer_to_questions_ar_migration": {
                        "type": "string"
                      },
                      "unansweredquestions": {
                        "type": "string"
                      },
                      "unmatchedquestions": {
                        "type": "string"
                      },
                      "grade": {
                        "type": "string"
                      },
                      "grade_ar": {
                        "type": "string"
                      },
                      "score": {
                        "type": "number"
                      },
                      "previous_grade": {
                        "type": "string"
                      },
                      "previous_score": {
                        "type": "number"
                      },
                      "bidding": {
                        "type": "array",
                        "items": {}
                      },
                      "save_as_draft_step": {
                        "type": "string"
                      },
                      "current_bid_price": {
                        "type": "integer"
                      },
                      "favourited_by": {
                        "type": "array",
                        "items": {}
                      },
                      "status": {
                        "type": "string"
                      },
                      "sell_status": {
                        "type": "string"
                      },
                      "questionnaire_migration_status": {
                        "type": "string"
                      },
                      "isApproved": {
                        "type": "boolean"
                      },
                      "isExpired": {
                        "type": "boolean"
                      },
                      "isFraudDetected": {
                        "type": "boolean"
                      },
                      "verified_date": {
                        "type": "null"
                      },
                      "isListedBefore": {
                        "type": "boolean"
                      },
                      "highlights": {
                        "type": "array",
                        "items": {}
                      },
                      "attributes": {
                        "type": "array",
                        "items": {}
                      },
                      "highlightsAdded": {
                        "type": "string"
                      },
                      "isReported": {
                        "type": "boolean"
                      },
                      "reportedBy": {
                        "type": "array",
                        "items": {}
                      },
                      "isVerifiedByAdmin": {
                        "type": "boolean"
                      },
                      "isPriceUpdating": {
                        "type": "boolean"
                      },
                      "variant_attributes_selections": {
                        "type": "array",
                        "items": {}
                      },
                      "isBiddingProduct": {
                        "type": "boolean"
                      },
                      "trade_in": {
                        "type": "boolean"
                      },
                      "trade_in_status": {
                        "type": "string"
                      },
                      "listingSource": {
                        "type": "string"
                      },
                      "_id": {
                        "type": "string"
                      },
                      "user_id": {
                        "type": "string"
                      },
                      "category_id": {
                        "type": "string"
                      },
                      "brand_id": {
                        "type": "string"
                      },
                      "model_id": {
                        "type": "string"
                      },
                      "varient": {
                        "type": "string"
                      },
                      "varient_ar": {
                        "type": "string"
                      },
                      "body_cracks": {
                        "type": "string"
                      },
                      "sell_price": {
                        "type": "integer"
                      },
                      "bid_price": {
                        "type": "integer"
                      },
                      "pick_up_address": {
                        "type": "object",
                        "properties": {
                          "address_id": {
                            "type": "string"
                          },
                          "address": {
                            "type": "string"
                          },
                          "city": {
                            "type": "string"
                          },
                          "postal_code": {
                            "type": "string"
                          },
                          "address_type": {
                            "type": "string"
                          },
                          "latitude": {
                            "type": "string"
                          },
                          "longitude": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "address_id",
                          "address",
                          "city",
                          "postal_code",
                          "address_type",
                          "latitude",
                          "longitude"
                        ]
                      },
                      "createdDate": {
                        "type": "string"
                      },
                      "updatedDate": {
                        "type": "string"
                      },
                      "__v": {
                        "type": "integer"
                      },
                      "expiryDate": {
                        "type": "string"
                      },
                      "code": {
                        "type": "string"
                      },
                      "varient_id": {
                        "type": "string"
                      },
                      "response": {
                        "type": "string"
                      },
                      "model_migration_source": {
                        "type": "string"
                      },
                      "model_variant_map_id": {
                        "type": "string"
                      },
                      "variant_migration_source": {
                        "type": "string"
                      },
                      "mismatch_model_migration": {
                        "type": "string"
                      },
                      "rejected_reasons": {
                        "type": "null"
                      },
                      "rejected_timestamp": {
                        "type": "null"
                      },
                      "image_updated": {
                        "type": "string"
                      },
                      "verifiedByAdminDate": {
                        "type": "string"
                      },
                      "category": {
                        "type": "object",
                        "properties": {
                          "_id": {
                            "type": "string"
                          },
                          "category_name_ar": {
                            "type": "string"
                          },
                          "active": {
                            "type": "boolean"
                          }
                        },
                        "required": [
                          "_id",
                          "category_name_ar",
                          "active"
                        ]
                      },
                      "brand": {
                        "type": "object",
                        "properties": {
                          "_id": {
                            "type": "string"
                          },
                          "brand_name_ar": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "_id",
                          "brand_name_ar"
                        ]
                      },
                      "model": {
                        "type": "object",
                        "properties": {
                          "_id": {
                            "type": "string"
                          },
                          "model_name_ar": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "_id",
                          "model_name_ar"
                        ]
                      },
                      "variant": {
                        "type": "array",
                        "items": [
                          {
                            "type": "object",
                            "properties": {
                              "_id": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "_id"
                            ]
                          }
                        ]
                      },
                      "id": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "product_images",
                      "defected_images",
                      "description",
                      "answer_to_questions",
                      "answer_to_questions_ar",
                      "answer_to_questions_migration",
                      "answer_to_questions_ar_migration",
                      "unansweredquestions",
                      "unmatchedquestions",
                      "grade",
                      "grade_ar",
                      "score",
                      "previous_grade",
                      "previous_score",
                      "bidding",
                      "save_as_draft_step",
                      "current_bid_price",
                      "favourited_by",
                      "status",
                      "sell_status",
                      "questionnaire_migration_status",
                      "isApproved",
                      "isExpired",
                      "isFraudDetected",
                      "verified_date",
                      "isListedBefore",
                      "highlights",
                      "attributes",
                      "highlightsAdded",
                      "isReported",
                      "reportedBy",
                      "isVerifiedByAdmin",
                      "isPriceUpdating",
                      "variant_attributes_selections",
                      "isBiddingProduct",
                      "trade_in",
                      "trade_in_status",
                      "listingSource",
                      "_id",
                      "user_id",
                      "category_id",
                      "brand_id",
                      "model_id",
                      "varient",
                      "varient_ar",
                      "body_cracks",
                      "sell_price",
                      "bid_price",
                      "pick_up_address",
                      "createdDate",
                      "updatedDate",
                      "__v",
                      "expiryDate",
                      "code",
                      "varient_id",
                      "response",
                      "model_migration_source",
                      "model_variant_map_id",
                      "variant_migration_source",
                      "mismatch_model_migration",
                      "rejected_reasons",
                      "rejected_timestamp",
                      "image_updated",
                      "verifiedByAdminDate",
                      "category",
                      "brand",
                      "model",
                      "variant",
                      "id"
                    ]
                  },
                  {
                    "type": "object",
                    "properties": {
                      "product_images": {
                        "type": "array",
                        "items": [
                          {
                            "type": "string"
                          }
                        ]
                      },
                      "defected_images": {
                        "type": "array",
                        "items": {}
                      },
                      "description": {
                        "type": "string"
                      },
                      "answer_to_questions": {
                        "type": "string"
                      },
                      "answer_to_questions_ar": {
                        "type": "string"
                      },
                      "answer_to_questions_migration": {
                        "type": "string"
                      },
                      "answer_to_questions_ar_migration": {
                        "type": "string"
                      },
                      "unansweredquestions": {
                        "type": "null"
                      },
                      "unmatchedquestions": {
                        "type": "null"
                      },
                      "grade": {
                        "type": "string"
                      },
                      "grade_ar": {
                        "type": "string"
                      },
                      "score": {
                        "type": "integer"
                      },
                      "previous_grade": {
                        "type": "string"
                      },
                      "previous_score": {
                        "type": "integer"
                      },
                      "bidding": {
                        "type": "array",
                        "items": {}
                      },
                      "save_as_draft_step": {
                        "type": "string"
                      },
                      "current_bid_price": {
                        "type": "integer"
                      },
                      "favourited_by": {
                        "type": "array",
                        "items": {}
                      },
                      "status": {
                        "type": "string"
                      },
                      "sell_status": {
                        "type": "string"
                      },
                      "questionnaire_migration_status": {
                        "type": "string"
                      },
                      "isApproved": {
                        "type": "boolean"
                      },
                      "isExpired": {
                        "type": "boolean"
                      },
                      "isFraudDetected": {
                        "type": "boolean"
                      },
                      "verified_date": {
                        "type": "null"
                      },
                      "isListedBefore": {
                        "type": "boolean"
                      },
                      "highlights": {
                        "type": "array",
                        "items": {}
                      },
                      "attributes": {
                        "type": "array",
                        "items": {}
                      },
                      "highlightsAdded": {
                        "type": "string"
                      },
                      "isReported": {
                        "type": "boolean"
                      },
                      "reportedBy": {
                        "type": "array",
                        "items": {}
                      },
                      "isVerifiedByAdmin": {
                        "type": "boolean"
                      },
                      "isPriceUpdating": {
                        "type": "boolean"
                      },
                      "variant_attributes_selections": {
                        "type": "array",
                        "items": {}
                      },
                      "isBiddingProduct": {
                        "type": "boolean"
                      },
                      "trade_in": {
                        "type": "boolean"
                      },
                      "trade_in_status": {
                        "type": "string"
                      },
                      "listingSource": {
                        "type": "string"
                      },
                      "_id": {
                        "type": "string"
                      },
                      "user_id": {
                        "type": "string"
                      },
                      "category_id": {
                        "type": "string"
                      },
                      "brand_id": {
                        "type": "string"
                      },
                      "model_id": {
                        "type": "string"
                      },
                      "varient": {
                        "type": "string"
                      },
                      "varient_ar": {
                        "type": "string"
                      },
                      "body_cracks": {
                        "type": "string"
                      },
                      "sell_price": {
                        "type": "integer"
                      },
                      "bid_price": {
                        "type": "integer"
                      },
                      "pick_up_address": {
                        "type": "object",
                        "properties": {
                          "address_id": {
                            "type": "string"
                          },
                          "address": {
                            "type": "string"
                          },
                          "city": {
                            "type": "string"
                          },
                          "postal_code": {
                            "type": "string"
                          },
                          "address_type": {
                            "type": "string"
                          },
                          "latitude": {
                            "type": "string"
                          },
                          "longitude": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "address_id",
                          "address",
                          "city",
                          "postal_code",
                          "address_type",
                          "latitude",
                          "longitude"
                        ]
                      },
                      "createdDate": {
                        "type": "string"
                      },
                      "updatedDate": {
                        "type": "string"
                      },
                      "__v": {
                        "type": "integer"
                      },
                      "expiryDate": {
                        "type": "string"
                      },
                      "code": {
                        "type": "string"
                      },
                      "varient_id": {
                        "type": "string"
                      },
                      "response": {
                        "type": "null"
                      },
                      "model_migration_source": {
                        "type": "string"
                      },
                      "model_variant_map_id": {
                        "type": "string"
                      },
                      "variant_migration_source": {
                        "type": "string"
                      },
                      "rejected_reasons": {
                        "type": "null"
                      },
                      "rejected_timestamp": {
                        "type": "null"
                      },
                      "image_updated": {
                        "type": "string"
                      },
                      "verifiedByAdminDate": {
                        "type": "string"
                      },
                      "category": {
                        "type": "object",
                        "properties": {
                          "_id": {
                            "type": "string"
                          },
                          "category_name_ar": {
                            "type": "string"
                          },
                          "active": {
                            "type": "boolean"
                          }
                        },
                        "required": [
                          "_id",
                          "category_name_ar",
                          "active"
                        ]
                      },
                      "brand": {
                        "type": "object",
                        "properties": {
                          "_id": {
                            "type": "string"
                          },
                          "brand_name_ar": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "_id",
                          "brand_name_ar"
                        ]
                      },
                      "model": {
                        "type": "object",
                        "properties": {
                          "_id": {
                            "type": "string"
                          },
                          "model_name_ar": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "_id",
                          "model_name_ar"
                        ]
                      },
                      "variant": {
                        "type": "array",
                        "items": [
                          {
                            "type": "object",
                            "properties": {
                              "_id": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "_id"
                            ]
                          }
                        ]
                      },
                      "id": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "product_images",
                      "defected_images",
                      "description",
                      "answer_to_questions",
                      "answer_to_questions_ar",
                      "answer_to_questions_migration",
                      "answer_to_questions_ar_migration",
                      "unansweredquestions",
                      "unmatchedquestions",
                      "grade",
                      "grade_ar",
                      "score",
                      "previous_grade",
                      "previous_score",
                      "bidding",
                      "save_as_draft_step",
                      "current_bid_price",
                      "favourited_by",
                      "status",
                      "sell_status",
                      "questionnaire_migration_status",
                      "isApproved",
                      "isExpired",
                      "isFraudDetected",
                      "verified_date",
                      "isListedBefore",
                      "highlights",
                      "attributes",
                      "highlightsAdded",
                      "isReported",
                      "reportedBy",
                      "isVerifiedByAdmin",
                      "isPriceUpdating",
                      "variant_attributes_selections",
                      "isBiddingProduct",
                      "trade_in",
                      "trade_in_status",
                      "listingSource",
                      "_id",
                      "user_id",
                      "category_id",
                      "brand_id",
                      "model_id",
                      "varient",
                      "varient_ar",
                      "body_cracks",
                      "sell_price",
                      "bid_price",
                      "pick_up_address",
                      "createdDate",
                      "updatedDate",
                      "__v",
                      "expiryDate",
                      "code",
                      "varient_id",
                      "response",
                      "model_migration_source",
                      "model_variant_map_id",
                      "variant_migration_source",
                      "rejected_reasons",
                      "rejected_timestamp",
                      "image_updated",
                      "verifiedByAdminDate",
                      "category",
                      "brand",
                      "model",
                      "variant",
                      "id"
                    ]
                  },
                  {
                    "type": "object",
                    "properties": {
                      "product_images": {
                        "type": "array",
                        "items": [
                          {
                            "type": "string"
                          }
                        ]
                      },
                      "defected_images": {
                        "type": "array",
                        "items": {}
                      },
                      "description": {
                        "type": "string"
                      },
                      "answer_to_questions": {
                        "type": "string"
                      },
                      "answer_to_questions_ar": {
                        "type": "string"
                      },
                      "answer_to_questions_migration": {
                        "type": "string"
                      },
                      "answer_to_questions_ar_migration": {
                        "type": "string"
                      },
                      "unansweredquestions": {
                        "type": "string"
                      },
                      "unmatchedquestions": {
                        "type": "null"
                      },
                      "grade": {
                        "type": "string"
                      },
                      "grade_ar": {
                        "type": "string"
                      },
                      "score": {
                        "type": "integer"
                      },
                      "previous_grade": {
                        "type": "string"
                      },
                      "previous_score": {
                        "type": "integer"
                      },
                      "bidding": {
                        "type": "array",
                        "items": {}
                      },
                      "save_as_draft_step": {
                        "type": "string"
                      },
                      "current_bid_price": {
                        "type": "integer"
                      },
                      "favourited_by": {
                        "type": "array",
                        "items": {}
                      },
                      "status": {
                        "type": "string"
                      },
                      "sell_status": {
                        "type": "string"
                      },
                      "questionnaire_migration_status": {
                        "type": "string"
                      },
                      "isApproved": {
                        "type": "boolean"
                      },
                      "isExpired": {
                        "type": "boolean"
                      },
                      "isFraudDetected": {
                        "type": "boolean"
                      },
                      "verified_date": {
                        "type": "null"
                      },
                      "isListedBefore": {
                        "type": "boolean"
                      },
                      "highlights": {
                        "type": "array",
                        "items": {}
                      },
                      "attributes": {
                        "type": "array",
                        "items": {}
                      },
                      "highlightsAdded": {
                        "type": "string"
                      },
                      "isReported": {
                        "type": "boolean"
                      },
                      "reportedBy": {
                        "type": "array",
                        "items": {}
                      },
                      "isVerifiedByAdmin": {
                        "type": "boolean"
                      },
                      "isPriceUpdating": {
                        "type": "boolean"
                      },
                      "variant_attributes_selections": {
                        "type": "array",
                        "items": {}
                      },
                      "isBiddingProduct": {
                        "type": "boolean"
                      },
                      "trade_in": {
                        "type": "boolean"
                      },
                      "trade_in_status": {
                        "type": "string"
                      },
                      "listingSource": {
                        "type": "string"
                      },
                      "_id": {
                        "type": "string"
                      },
                      "user_id": {
                        "type": "string"
                      },
                      "category_id": {
                        "type": "string"
                      },
                      "brand_id": {
                        "type": "string"
                      },
                      "model_id": {
                        "type": "string"
                      },
                      "varient": {
                        "type": "string"
                      },
                      "varient_ar": {
                        "type": "string"
                      },
                      "body_cracks": {
                        "type": "string"
                      },
                      "sell_price": {
                        "type": "integer"
                      },
                      "bid_price": {
                        "type": "integer"
                      },
                      "pick_up_address": {
                        "type": "object",
                        "properties": {
                          "address_id": {
                            "type": "string"
                          },
                          "address": {
                            "type": "string"
                          },
                          "city": {
                            "type": "string"
                          },
                          "postal_code": {
                            "type": "string"
                          },
                          "address_type": {
                            "type": "string"
                          },
                          "latitude": {
                            "type": "string"
                          },
                          "longitude": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "address_id",
                          "address",
                          "city",
                          "postal_code",
                          "address_type",
                          "latitude",
                          "longitude"
                        ]
                      },
                      "createdDate": {
                        "type": "string"
                      },
                      "updatedDate": {
                        "type": "string"
                      },
                      "__v": {
                        "type": "integer"
                      },
                      "expiryDate": {
                        "type": "string"
                      },
                      "code": {
                        "type": "string"
                      },
                      "varient_id": {
                        "type": "string"
                      },
                      "response": {
                        "type": "null"
                      },
                      "model_migration_source": {
                        "type": "string"
                      },
                      "model_variant_map_id": {
                        "type": "string"
                      },
                      "variant_migration_source": {
                        "type": "string"
                      },
                      "rejected_reasons": {
                        "type": "null"
                      },
                      "rejected_timestamp": {
                        "type": "null"
                      },
                      "image_updated": {
                        "type": "string"
                      },
                      "verifiedByAdminDate": {
                        "type": "string"
                      },
                      "category": {
                        "type": "object",
                        "properties": {
                          "_id": {
                            "type": "string"
                          },
                          "category_name_ar": {
                            "type": "string"
                          },
                          "active": {
                            "type": "boolean"
                          }
                        },
                        "required": [
                          "_id",
                          "category_name_ar",
                          "active"
                        ]
                      },
                      "brand": {
                        "type": "object",
                        "properties": {
                          "_id": {
                            "type": "string"
                          },
                          "brand_name_ar": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "_id",
                          "brand_name_ar"
                        ]
                      },
                      "model": {
                        "type": "object",
                        "properties": {
                          "_id": {
                            "type": "string"
                          },
                          "model_name_ar": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "_id",
                          "model_name_ar"
                        ]
                      },
                      "variant": {
                        "type": "array",
                        "items": [
                          {
                            "type": "object",
                            "properties": {
                              "_id": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "_id"
                            ]
                          }
                        ]
                      },
                      "id": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "product_images",
                      "defected_images",
                      "description",
                      "answer_to_questions",
                      "answer_to_questions_ar",
                      "answer_to_questions_migration",
                      "answer_to_questions_ar_migration",
                      "unansweredquestions",
                      "unmatchedquestions",
                      "grade",
                      "grade_ar",
                      "score",
                      "previous_grade",
                      "previous_score",
                      "bidding",
                      "save_as_draft_step",
                      "current_bid_price",
                      "favourited_by",
                      "status",
                      "sell_status",
                      "questionnaire_migration_status",
                      "isApproved",
                      "isExpired",
                      "isFraudDetected",
                      "verified_date",
                      "isListedBefore",
                      "highlights",
                      "attributes",
                      "highlightsAdded",
                      "isReported",
                      "reportedBy",
                      "isVerifiedByAdmin",
                      "isPriceUpdating",
                      "variant_attributes_selections",
                      "isBiddingProduct",
                      "trade_in",
                      "trade_in_status",
                      "listingSource",
                      "_id",
                      "user_id",
                      "category_id",
                      "brand_id",
                      "model_id",
                      "varient",
                      "varient_ar",
                      "body_cracks",
                      "sell_price",
                      "bid_price",
                      "pick_up_address",
                      "createdDate",
                      "updatedDate",
                      "__v",
                      "expiryDate",
                      "code",
                      "varient_id",
                      "response",
                      "model_migration_source",
                      "model_variant_map_id",
                      "variant_migration_source",
                      "rejected_reasons",
                      "rejected_timestamp",
                      "image_updated",
                      "verifiedByAdminDate",
                      "category",
                      "brand",
                      "model",
                      "variant",
                      "id"
                    ]
                  }
                ]
              }
            },
            "required": [
              "info",
              "results"
            ]
          },
          "status": {
            "type": "string"
          },
          "timeStamp": {
            "type": "string"
          },
          "violations": {
            "type": "null"
          }
        },
        "required": [
          "message",
          "responseData",
          "status",
          "timeStamp",
          "violations"
        ]
    };

    it('Verify URL should be reachable', () => {
        cy.request({method: 'GET', 
             url:baseUrl +'/product', 
            failOnStatusCode: false})
            .then((response) => {
                expect(response.status).to.be.within(200, 299);
            });
    });

    it('Verify User should return 200 OK', () => {
        cy.request({method: 'GET', 
        url:baseUrl +'/product', 
       failOnStatusCode: false})
       .then((response) => {
          expect(response.status).to.equal(200);
        });
    });

    it('Verify Api response time', () => {
      const startTime = Date.now();
      cy.request({method: 'GET', 
      url:baseUrl +'/product', 
      failOnStatusCode: false})
      .then((response) => {
        // Record the end time
        const endTime = Date.now();
        // Calculate the response time
        const responseTime = endTime - startTime;
        expect(response.status).to.equal(200);
        // I use 652 from postman as example because I dont knoe minthreshold for this API
        expect(responseTime).to.be.lessThan(652);
      });
    });

    it('Verify Response Schema', () => {
        cy.request({method: 'GET', 
        url:baseUrl +'/product', 
       failOnStatusCode: false})
       .then((response) => {
        cy.validateJsonSchema(expectedSchema, response.body);     
       });
    });

    it('Verify Data Contents of Response body', () => {
        cy.request('GET', baseUrl +'/product')
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.message).to.eq('Get Products successfully');
                // this total will be change whenever new records added.
                expect(response.body.responseData.info.total).to.eq( 463129);
                expect(response.body.responseData.info.pages).to.eq( 92626);

                expect(response.body.responseData.results[1].description).to.eq('بدر');
                expect(response.body.responseData.results[1].grade).to.eq('Extensive Use');
                expect(response.body.responseData.results[1].grade_ar).to.eq( "مستخدم بشدة");

                expect(response.body.responseData.results[1].score).to.eq(65.4 );
                expect(response.body.responseData.results[1].previous_grade).to.eq('Extensive Use');
                expect(response.body.responseData.results[1].previous_score).to.eq(65.4 );
                expect(response.body.responseData.results[1].bidding).to.deep.equal([]);
                expect(response.body.responseData.results[1].save_as_draft_step).to.be.empty;
                expect(response.body.responseData.results[1].current_bid_price).to.eq(5);

                expect(response.body.responseData.results[1].favourited_by).to.deep.equal([]);
                expect(response.body.responseData.results[1].status).to.eq('Delete');
                expect(response.body.responseData.results[1].sell_status).to.eq('Available');
                expect(response.body.responseData.results[1].questionnaire_migration_status).to.eq('COMPLETED');

                expect(response.body.responseData.results[1].isApproved).to.be.true;
                expect(response.body.responseData.results[1].isExpired).to.be.false;

                expect(response.body.responseData.results[1].isFraudDetected).to.be.false;
                expect(response.body.responseData.results[1].verified_date).to.be.null;
                expect(response.body.responseData.results[1].isListedBefore).to.be.false;
                expect(response.body.responseData.results[1].highlights).to.deep.equal([]);
                expect(response.body.responseData.results[1].highlights).to.deep.equal([]);
                expect(response.body.responseData.results[1].highlightsAdded).to.eq('isHighlighted');
                expect(response.body.responseData.results[1].isReported).to.be.false;
                expect(response.body.responseData.results[1].reportedBy).to.deep.equal([]);

                expect(response.body.responseData.results[1].isVerifiedByAdmin).to.be.false;
                expect(response.body.responseData.results[1].isPriceUpdating).to.be.false;
                expect(response.body.responseData.results[1].variant_attributes_selections).to.deep.equal([]);
                expect(response.body.responseData.results[1].isBiddingProduct).to.be.false;
                expect(response.body.responseData.results[1].trade_in).to.be.false;
                expect(response.body.responseData.results[1].trade_in_status).to.eq('InProgress');
                expect(response.body.responseData.results[1].listingSource).to.eq('consumer');
                expect(response.body.responseData.results[1]._id).to.eq('6073fa2d5ad11470c33cc74e');

                expect(response.body.responseData.results[1].user_id).to.eq('6057280c7b6600be053415d6');
                expect(response.body.responseData.results[1].category_id).to.eq('60661c60fdc090d1ce2d4914');
                expect(response.body.responseData.results[1].brand_id).to.eq('6069faf484541d77f553167a');
                expect(response.body.responseData.results[1].model_id).to.eq('6069fb8084541d07be53167b');
                expect(response.body.responseData.results[1].varient).to.eq('256 GB');
                expect(response.body.responseData.results[1].varient_ar).to.eq('٢٥٦ غيغابايت');

                expect(response.body.responseData.results[1].body_cracks).to.eq('no');
                expect(response.body.responseData.results[1].sell_price).to.eq(10);
                expect(response.body.responseData.results[1].bid_price).to.eq(5);

                expect(response.body.responseData.results[1].pick_up_address.address_id).to.eq('606c762d713153e90bab76d8');
                expect(response.body.responseData.results[1].pick_up_address.address).to.eq('Shsjsj');
                expect(response.body.responseData.results[1].pick_up_address.city).to.eq('\'abal \'abla');
                expect(response.body.responseData.results[1].pick_up_address.postal_code).to.eq('12222');
                expect(response.body.responseData.results[1].pick_up_address.address_type).to.be.empty;
                expect(response.body.responseData.results[1].pick_up_address.latitude).to.be.empty;
                expect(response.body.responseData.results[1].pick_up_address.longitude).to.be.empty;


                expect(response.body.responseData.results[1].code).to.eq('riHBegH');
                expect(response.body.responseData.results[1].varient_id).to.eq('632b3790f49ff67c8b401fab');
                expect(response.body.responseData.results[1].response).to.eq('6192619564f8e10029a9965c');
                expect(response.body.responseData.results[1].model_migration_source).to.eq('Updated old model_id = 6069fb8084541d07be53167b with 6069fb8084541d07be53167b');
                expect(response.body.responseData.results[1].model_variant_map_id).to.eq('636085f33b98a88c5b951241');
                expect(response.body.responseData.results[1].variant_migration_source).to.eq('Updated old variant_id with from 6069fbd484541db57053167c to 632b3790f49ff67c8b401fab');
                expect(response.body.responseData.results[1].rejected_reasons).to.be.null;
                expect(response.body.responseData.results[1].rejected_timestamp).to.be.null;

                expect(response.body.responseData.results[1].category._id).to.eq('60661c60fdc090d1ce2d4914');
                expect(response.body.responseData.results[1].category.category_name_ar).to.eq('جوالات');
                expect(response.body.responseData.results[1].category.active).to.be.true;

                expect(response.body.responseData.results[1].brand._id).to.eq('6069faf484541d77f553167a');
                expect(response.body.responseData.results[1].brand.brand_name_ar).to.eq('أبل');

                expect(response.body.responseData.results[1].model._id).to.eq('6069fb8084541d07be53167b');
                expect(response.body.responseData.results[1].model.model_name_ar).to.eq( 'آيفون ١٢');
                expect(response.body.responseData.results[1].variant[0]._id).to.eq('632b3790f49ff67c8b401fab');
                expect(response.body.responseData.results[1]._id).to.eq('6073fa2d5ad11470c33cc74e');

                expect(response.body.status).to.eq('success');
                expect(response.body.violations).to.be.null;
            });
    });

    it('Verify Query parameter page number results', () => {
      cy.request('GET', baseUrl +'/product/?page%20number=2')
          .then((response) => {
              expect(response.status).to.eq(200);
              expect(response.body.message).to.eq('Get Products successfully');
              // this total will be change whenever new records added.
              expect(response.body.responseData.info.total).to.eq( 463129);
              expect(response.body.responseData.info.pages).to.eq( 92626);

              expect(response.body.responseData.results).to.have.length(5);
    
              expect(response.body.status).to.eq('success');
              expect(response.body.violations).to.be.null;

          });
    });

    it('Verify Query parameter Size results', () => {
      cy.request('GET', baseUrl +'/product/?size=1')
          .then((response) => {
              expect(response.status).to.eq(200);
              expect(response.body.message).to.eq('Get Products successfully');
              // this total will be change whenever new records added.
              expect(response.body.responseData.info.total).to.eq(463129);
              expect(response.body.responseData.info.pages).to.eq(463129);

              expect(response.body.responseData.results).to.have.length(1);
    
              expect(response.body.status).to.eq('success');
              expect(response.body.violations).to.be.null;

          });
    });

    it('Verify Query parameter page number & size results', () => {
      cy.request('GET', baseUrl +'/product/?page%20number=2&size=1')
          .then((response) => {
              expect(response.status).to.eq(200);
              expect(response.body.message).to.eq('Get Products successfully');
              // this total will be change whenever new records added.
              expect(response.body.responseData.info.total).to.eq(463129);
              expect(response.body.responseData.info.pages).to.eq(463129);

              expect(response.body.responseData.results).to.have.length(1);
    
              expect(response.body.status).to.eq('success');
              expect(response.body.violations).to.be.null;

          });
    });
});
